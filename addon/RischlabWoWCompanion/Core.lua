-- RISCHLAB WoW Companion (Forever) - local-only foundation.
-- No network bridge, LLM calls, automated responses, disk exports or gameplay actions.
local frame = CreateFrame("Frame")
local captureEnabled = false -- session-only explicit opt-in
local whispers = {}
local maxEntries = 20

local function announce(message)
  if DEFAULT_CHAT_FRAME then
    DEFAULT_CHAT_FRAME:AddMessage("|cff73c5ffRWC:|r " .. message)
  end
end

local function clearMemory()
  for i = #whispers, 1, -1 do
    whispers[i] = nil
  end
end

local function onEvent(_, event, message, sender)
  if event == "PLAYER_LOGIN" then
    RWCDB = type(RWCDB) == "table" and RWCDB or {}
    RWCDB.schema = 1 -- preferences only; never save chat text
    announce("Local scaffold loaded. /rwc help")
  elseif event == "CHAT_MSG_WHISPER" and captureEnabled then
    if type(message) ~= "string" or type(sender) ~= "string" then
      return
    end
    if #whispers >= maxEntries then
      table.remove(whispers, 1)
    end
    whispers[#whispers + 1] = { sender = sender:sub(1, 100), text = message:sub(1, 1024) }
  end
end

frame:RegisterEvent("PLAYER_LOGIN")
frame:RegisterEvent("CHAT_MSG_WHISPER")
frame:SetScript("OnEvent", onEvent)

SLASH_RISCHLABWOWCOMPANION1 = "/rwc"
SlashCmdList["RISCHLABWOWCOMPANION"] = function(raw)
  local command = type(raw) == "string" and string.lower(raw:match("^%s*(.-)%s*$")) or ""
  if command == "capture on" then
    captureEnabled = true
    announce("Incoming whisper capture ENABLED for this session only; kept in memory, never transmitted.")
  elseif command == "capture off" then
    captureEnabled = false
    clearMemory()
    announce("Capture disabled; buffered messages deleted.")
  elseif command == "status" then
    announce("Transport=disconnected; AI=disabled; whisper capture=" .. (captureEnabled and "on" or "off") .. "; buffered=" .. #whispers)
  elseif command == "recent" then
    announce("Buffered incoming whispers: " .. #whispers .. ". Content is not printed or exported.")
  else
    announce("Commands: /rwc status | capture on | capture off | recent | help")
  end
end
