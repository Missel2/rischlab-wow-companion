# Active work index

**Snapshot:** 2026-11-15. This is a navigation index, not a live status API. Always reconcile with GitHub main, open PRs and actual CI.

## Current milestone
Project foundation remains in [PR #1](https://github.com/Missel2/rischlab-wow-companion/pull/1) and is **not yet merged**. The objective is a reliable, secure development system before live game features.

| Priority | Issue | Completion gate |
|---|---|---|
| P0 | [#2 – Forever release-client baseline](https://github.com/Missel2/rischlab-wow-companion/issues/2) | Client build and real install/event evidence |
| P0 | [#3 – official plan OAuth](https://github.com/Missel2/rischlab-wow-companion/issues/3) | Opt-in desktop-only auth and streaming |
| P0 | [#4 – Blizzard rules / transport](https://github.com/Missel2/rischlab-wow-companion/issues/4) | Go/no-go per transport with documented uncertainty |
| P1 | [#5 – chat suggestions](https://github.com/Missel2/rischlab-wow-companion/issues/5) | Manual edit/send, negative consent checks |
| P1 | [#6 – AH intelligence](https://github.com/Missel2/rischlab-wow-companion/issues/6) | Calculations, provenance and player-initiated scans |
| P1 | [#7 – hardening/release](https://github.com/Missel2/rischlab-wow-companion/issues/7) | Reproducible package and separate release approval |

## Development order
Finish the open foundation PR and establish branch ruleset, then run **two independent proofs**: Forever client compatibility and desktop-only official OAuth. Transport legality/security is a gate for live integration, not an excuse to skip desktop work.

Avoid duplicate roadmap documents or a second current handoff. Move completed items to history when closed.
