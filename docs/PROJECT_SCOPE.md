# Product charter: what we are building

**Status:** adopted product direction, not a claim of working integration. Updated 2026-11-15.

## Purpose
Create a *player-controlled*, local-first AI assistant for World of Warcraft: Forever. Reduce manual research, repetitive organization and poor decision context without turning the game into a bot. The addon is useful without a remote server, and users can inspect what is shared.

## Primary user journeys (in priority order)
1. **Contextual chat draft:** the player chooses a message; the assistant explains or drafts a response; the player edits/sends it. No automatic send.
2. **Item / quest question:** the player selects a game object or voluntarily enters a question; the answer uses verifiable sources and states uncertainty.
3. **AH market briefing:** the player explicitly initiates a permitted scan/import; deterministic logic computes price history, fees, capital use and risk, and the AI explains *dated* data.
4. **Profession/quest planner:** the player chooses a goal; tools build a checklist from known skills, inventory and provenance-marked game data.

## Non-goals
Unattended play, automatic combat/targeting/movement, chat bots, autonomous AH operations, exploit/anti-cheat circumvention, guaranteed trading profit, private-chat harvesting, requiring a paid cloud API, or requiring Kubernetes.

## UX contract
- User-first: localized German UX, optional English, keyboard + mouse accessible, lightweight in-game context panels, companion desktop fallback.
- No unsolicited popups, repetitive prompts, fake confidence, automatic tool actions or surprise spending.
- All model-backed insights show source, timestamp/freshness, inference-versus-fact and accessible dismiss/edit paths.
- No-chat-cloud by default; explicit per-channel cloud permission and easy revocation.
- Prefer visible progress on one user journey over adding disconnected components.

## Outcome measures (targets; not yet measured)
- Opt-in chat draft usable with no game actions performed by the companion.
- 0 unauthorized sends, purchases or persisted private messages (tested negative paths).
- Verified arithmetic on synthetic AH fixtures; age/uncertainty clearly shown.
- Desktop fallback usable when in-game return transport is unavailable.
- No required manual GitHub UI interactions for routine development tasks.

## Change priorities
P0: correctness, security, real client evidence, consent and reliable transport boundaries. P1: complete user journeys. P2: polish and advanced AI features. Avoid new services until justified by measured need.
