# Governance, authority and engineering rules

**Status: project policy.** The repository is public; no unpublished or private-project identifiers may appear in any public material.

## Responsibilities
| Operation | Development agent | Maintainer |
|---|---|---|
| Investigate, plan, write tests/code/docs | May perform within approved scope | Defines goals and constraints |
| Push scoped branch and open/update PR | May perform | Reviews significant implications |
| GitHub CI / static security checks | Automatic | No routine button presses |
| Merge into `main` | Only after explicit authorization for the particular PR and fresh gates | Approves in chat (no forced GitHub click) |
| Publish release/package | Separate explicit authorization | Approves specific version and impacts |
| Install on user's game client | Separate explicit authorization / user-controlled install | Chooses test context |
| Network model login, spend or transmitting private chat | Explicit consent and technical opt-in | Grants/revokes scope |
| Game actions, combat, chat sends, AH transactions | Never autonomously | Remains in control |

A broad authorization to build project foundations is **not** a standing permission to merge, publish, log in to external accounts or modify the user's game environment. If the maintainer later changes this authorization model, record an ADR and exact scope before automation.

## Branch / PR discipline
- Feature branches, PRs and squash-only history; no direct commits to `main`, force pushes, auto-merge or bypasses.
- Prefer one product proof/one coherent change per PR. Reuse matching open work, do not create duplicate PRs.
- Each PR includes user outcome, issue, exact HEAD, tests and evidence, privacy, license, release impact and rollback.
- Never approve a PR merely because tests written by the same agent pass: require negative tests, code review and current-head checks.
- The PR's CI must be fully green **on the commit being merged**; confirm mergeability, discussions and the active ruleset.
- After merge, verify `main` and its CI independently. A successful PR is not a release or client test.

## Risk classification
- **Routine:** docs, isolated pure logic, tests, UI polish without permissions/data changes. Normal PR and existing merge approval.
- **Sensitive:** auth, cloud data export, private chat, API quotas/billing, dependencies, workflow permissions, third-party license, transport. Document threat-model change, negative tests and explicit scope approval.
- **Operational:** experimental live game bridge, app distribution, installation, release, actual game-client tests involving player data. Independent user authorization and policy gate.
- **Forbidden:** game botting, process injection, anti-cheat circumvention, automated trading/chat/casting. No override via normal PR.

## Source-of-truth order
Current code + GitHub PR/CI and release evidence > dated handoff > roadmap/plans > historical notes. This document sets process, not live implementation status.

## Low-click principle
The agent runs permitted GitHub operations and explains only decisions requiring human judgment. Avoid asking the user to click 'Run workflow' just to transfer responsibility. No scheduled or background development without a distinct automation authorization.
