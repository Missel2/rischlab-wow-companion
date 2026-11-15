# Roadmap and evidence gates

Updated 2026-11-15. This is a **plan**, not a list of completed game features.

| Phase | Goal | Required evidence | State |
| --- | --- | --- | --- |
| 0 | Public MIT scaffold, privacy policy, protocol, CI | GitHub PR + CI checks | In progress |
| 1 | Forever release-client addon compatibility | Client build, Lua API probes, add/remove, chat capture opt-in tests | Not started |
| 2 | Official ChatGPT-plan OAuth prototype | User-initiated PKCE login, approved scopes, model listing, opt-out, token recovery; no game link | Not started |
| 3 | Compare read-only data transports and policy | Rules assessment, threat model, latency and recovery benchmark, explicit go/no-go | Not started |
| 4 | User-triggered chat assistance | End-to-end explicit request, response UI/editing, no automatic chat sends | Not started |
| 5 | Auction-house intelligence | Opt-in user-requested capture, scan limit compliance, verified fees/price inputs, no transactions | Not started |
| 6 | Personal planner, professions, release packaging | Data provenance, privacy QA, docs, reproducible builds and update path | Not started |

## Next product proof

The nearest evidence is **Phase 1: client-side addon smoke test** together with a runnable **Phase 2: official OAuth proof outside the game**. They are independently testable. Do not block everything on an experimental live return channel.

## Acceptance vocabulary

- **Implemented**: code in reviewed revision.
- **CI tested**: tests ran and passed on a particular SHA.
- **Client verified**: reproducible evidence on an identified Forever release build.
- **Policy reviewed**: documented compliance decision with uncertainties.
- **Released**: published, installable, explicitly approved version.

## Initial work streams

Game API audit, auth/model adapter, bridge risk assessment, chat privacy UX, AH data evidence and packaging. Track individual acceptance criteria in GitHub Issues.
