# RISCHLAB WoW Companion

An open-source, human-in-control AI companion for **World of Warcraft: Forever**.

> **Status (2026-11-15): foundation / proof of concept.** The in-game addon provides a local opt-in session buffer and status commands. The Node.js companion only validates event envelopes. **There is no live WoW-to-LLM link, no ChatGPT login, and no auction scanner yet.**

## Objectives

- Context-aware chat assistance: translation, summaries and **editable, manually sent** reply suggestions.
- Quest, character, item, profession and auction-house decision support from verified data.
- Local privacy boundaries; deterministic calculations before LLM explanations.
- No gameplay automation, unattended posting, chat sending or game input simulation.

## Layout

- `addon/RischlabWoWCompanion/` – Forever Lua addon (Interface 16001).
- `companion/` – isolated Node.js protocol scaffold; no network or game access.
- `tests/` – Lua smoke tests.
- `docs/` – roadmap, architecture, privacy/compliance gates, decisions.
- `.github/workflows/` – initial CI; no publishing or deployment.

## Try the local scaffold

Requires Node.js 26+ and, for addon tests, Lua 5.1.

```sh
node companion/src/index.mjs --check
npm --prefix companion test
lua5.1 tests/addon_smoke.lua
```

For an **optional manual addon smoke test** in a separate Forever installation, copy `addon/RischlabWoWCompanion` to `_forever_/Interface/AddOns/` and restart the client. In-game commands: `/rwc help`, `/rwc status`, `/rwc capture on`, `/rwc capture off`. Capture only holds up to 20 incoming whispers in process memory for the session, is **off by default**, and never sends or writes their contents. No third-party files are required.

**Do not install experimental live transports into a production game client** until the policy review and user-authorized pilot are complete.

## Governance

Read [AGENTS.md](AGENTS.md), [roadmap](docs/roadmap.md), [architecture](docs/architecture.md), and [game-integrity policy](docs/game-integrity.md) before contributing.

Licensing: MIT for original code; see [THIRD_PARTY.md](THIRD_PARTY.md). This is an independent community project, not affiliated with or endorsed by Blizzard Entertainment or OpenAI.
