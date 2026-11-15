-- Run with lua5.1 tests/addon_smoke.lua (no WoW client required).
local events = {}
local handler = nil
local messages = {}
DEFAULT_CHAT_FRAME = { AddMessage = function(_, msg) messages[#messages + 1] = msg end }
SlashCmdList = {}
CreateFrame = function()
  return {
    RegisterEvent = function(_, ev) events[ev] = true end,
    SetScript = function(_, name, fn)
      assert(name == "OnEvent")
      handler = fn
    end
  }
end
dofile("addon/RischlabWoWCompanion/Core.lua")
assert(events.PLAYER_LOGIN and events.CHAT_MSG_WHISPER)
assert(type(SlashCmdList.RISCHLABWOWCOMPANION) == "function")
handler(nil, "PLAYER_LOGIN")
assert(RWCDB.schema == 1)

local slash = SlashCmdList.RISCHLABWOWCOMPANION
handler(nil, "CHAT_MSG_WHISPER", "should be ignored", "someone")
slash("status")
assert(messages[#messages]:find("buffered=0", 1, true))

slash("capture on")
handler(nil, "CHAT_MSG_WHISPER", "test payload", "someone")
slash("status")
assert(messages[#messages]:find("buffered=1", 1, true))
assert(RWCDB.whispers == nil and RWCDB.chat == nil)

slash("capture off")
slash("status")
assert(messages[#messages]:find("buffered=0", 1, true))
assert(messages[#messages]:find("capture=off", 1, true))
print("addon smoke tests: PASS")
