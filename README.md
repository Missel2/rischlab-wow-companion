# RISCHLAB WoW Companion

An independent **open-source, player-controlled AI companion** for **World of Warcraft: Forever**. Public MIT code; local/private user data.

> **Status: development / proof of concept.** The addon currently supports local commands and a temporary opt-in whisper buffer; the desktop companion validates synthetic events only. **No connected LLM, OAuth login, WoW live bridge, auction scanner, release package or game installation is verified.**

## Product goal

Save time on **chat drafts, item and quest research, profession planning and auction-house reasoning** while preserving player control. No automatic chat sending, buying, casting, combat, botting, game input synthesis or memory injection. Model advice must be grounded in verified data and explain uncertainty.

## Start here

- [What we are building](docs/PROJECT_SCOPE.md) — user journeys, priority and non-goals
- [Work index](docs/WORK_INDEX.md) — actual outstanding tasks
- [Governance](docs/GOVERNANCE.md) and [quality gates](docs/QUALITY_POLICY.md)
- [Architecture](docs/architecture.md) and [decisions](docs/DECISIONS.md)
- [Toolchain](docs/TOOLCHAIN.md), [test strategy](docs/TEST_STRATEGY.md), [developer playbook](docs/DEVELOPMENT_PLAYBOOK.md)
- [Game integrity](docs/game-integrity.md) and [privacy/public disclosure](docs/PRIVACY_AND_DISCLOSURE.md)
- [Current handoff](docs/HANDOFF.md), [evidence ledger](docs/EVIDENCE.md), [release policy](docs/RELEASE_POLICY.md)

## Repository

```text
addon/RischlabWoWCompanion/   # Lua addon, test-only until client validation
companion/                    # Offline Node.js event validation scaffold
tests/                        # Lua addon event/command mocks
scripts/                      # Public portable policy validation
docs/                         # Governing documents and ADRs
.github/                      # Read-only CI, CodeQL, updates and templates
```

## Local preflight (no WoW client, no account or network needed)

Requires Node.js 26+ and Lua 5.1 for addon tests:

```sh
node companion/src/index.mjs --check
npm --prefix companion test
node scripts/repo-policy.mjs
node --test scripts/repo-policy.test.mjs
luac5.1 -p addon/RischlabWoWCompanion/Core.lua tests/addon_smoke.lua
lua5.1 tests/addon_smoke.lua
```

For a separately authorized **manual** local addon smoke test, copy `addon/RischlabWoWCompanion` under the client's `Interface/AddOns/` directory (locate and verify this on the real Forever release client). Commands: `/rwc help`, `/rwc status`, `/rwc capture on`, `/rwc capture off`, `/rwc recent`. Capture buffers up to 20 incoming whispers in memory for the current session, is off by default, and neither saves their text nor transmits it.

A green CI run demonstrates only its named synthetic, static and unit tests. The next real gates are release-client API verification, official desktop-only ChatGPT-plan auth and transport/policy review. No live bridges are enabled.

## License and attribution

Original code: [MIT](LICENSE). The project is not affiliated with or endorsed by Blizzard Entertainment or OpenAI. No upstream software or proprietary game data is bundled; see [THIRD_PARTY.md](THIRD_PARTY.md).
