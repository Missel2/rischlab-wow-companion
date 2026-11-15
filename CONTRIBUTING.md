# Contributing

Read AGENTS.md and docs/game-integrity.md first.

Use a topic branch and PR. Include: purpose, changed files, tests and output, user-visible effects, security/privacy impact, and any game-client validation. No unreviewed model/bridge network capabilities or private data in fixtures.

Local checks:
- `node companion/src/index.mjs --check`
- `npm --prefix companion test`
- `lua5.1 tests/addon_smoke.lua`
- `luac5.1 -p addon/RischlabWoWCompanion/Core.lua`

No actual WoW server connection is part of CI. Successful CI is **not** evidence of live Forever compatibility or Blizzard approval.
