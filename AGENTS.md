# AGENTS.md – contributor and AI-agent instructions

## Mission and current state
Build a privacy-preserving, player-controlled companion for WoW: Forever. **The current repository is an early scaffold, not a live product.** Read README.md, docs/roadmap.md and docs/game-integrity.md before any changes.

## Non-negotiable boundaries
1. No botting, game-input synthesis, memory injection/reading, anti-cheat avoidance, unattended auction operations, auto-chat sending or combat action selection.
2. Default-deny collection and transmission. No chat content, character identity, tokens or market scans sent to any cloud without explicit, informed per-source consent.
3. Never embed access tokens, OAuth secrets, user chat logs, recordings, SavedVariables, screenshots or private infrastructure configuration in commits, CI logs, PRs or Issues.
4. Human controls game actions. Suggestions are advisory, editable and manually actioned.
5. Do not introduce optical/sound/file-slot live bridges into an installable package until a policy review and controlled, user-approved compatibility test are documented; observed technical feasibility is not proof of authorization by Blizzard.
6. Official OAuth or API routes only for OpenAI; do not scrape chatgpt.com, export browser sessions, or reuse ChatGPT cookies. No silent paid-API fallback.
7. No external code execution/tool privileges for models unless separately reviewed; protocol input is untrusted and strictly validated.
8. Cite versions and use actual measured client behavior. Beta notes are not a current release verification.
9. Respect third-party licenses. Do not copy AGPL code into MIT implementation without explicit licensing decision.
10. No unrequested release, installation, deployment or gameplay data capture.

## Development workflow
- Prefer one focused branch per change and pull requests into main.
- CI must be green before merging. Never bypass protections or force-update main.
- State what changed, how it was tested, what remains unverified, and any required user action.
- Check altered areas rather than rewriting unrelated components.
- Issue/roadmap claims must distinguish implemented, unit-tested, game-tested and policy-approved.
- Keep documentation and acceptance criteria updated when behavior changes.

## Architectural guardrails
- Lua addon has no direct network access. Bridge interfaces remain replaceable and disabled by default.
- Run deterministic calculations outside the model. The model explains, not invents market evidence.
- Local first: settings, account credentials and optional transcripts stay outside the repository.
- Preserve a usable desktop fallback if in-game return transport is not acceptable or breaks.
