# Verification ledger

Records **specific observations**; a later code change invalidates prior head-specific acceptance.

| Date | Revision | Evidence | Result | Scope / limit |
|---|---|---|---|---|
| 2026-11-15 | `633f5319bc96872c68f54e5a2b798adb4d82c5cc` | [PR #1 / GitHub Actions 43753707552](https://github.com/Missel2/rischlab-wow-companion/actions/runs/43753707552) | Initial addon, companion and Dependabot config checks passed | Lua mock / Node protocol only; **not real Forever, OAuth or live transport** |
| 2026-11-15 | next governance commit (to be verified) | PR #1 | **Pending final SHA CI** | Do not mark passed on the historical run |

## Missing live evidence (explicit)
- Forever release-client load and API behavior: pending (#2).
- ChatGPT-plan OAuth and quota behavior: pending (#3).
- Approved and reliable game-to-companion transports: pending (#4).
- Human-controlled chat UX and AH economic correctness in-game: pending (#5/#6).
- Main branch ruleset enforcement and public release qualification: pending.

Add a dated row only after observing a result, including failed tests and limitations. Keep exact SHA, test scenario and credible evidence link. Do not publish private chat, tokens or installation paths.
