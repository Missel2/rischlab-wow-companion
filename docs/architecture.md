# Architecture (proposed, not yet implemented)

## Boundaries

1. **WoW Lua addon** (Interface 16001, Mainline API shape, Forever-specific build detection): context UI, locally authorized events, no network or direct disk reads.
2. **Transport adapter**: pluggable and disabled by default. Candidate read-only chat log, saved state on reload, optically encoded outbound frames and precreated load-on-demand inbound slots are *research hypotheses*, not an approved production design.
3. **Local companion** (Node.js): validation, explicit consent, deterministic calculation, local persistence, model adapter and output sanitization. Currently only a protocol validator and offline health command exist.
4. **Model adapter**: official ChatGPT-plan OAuth where eligible, optional separately paid API or local LLM. Always require user consent and usage visibility.
5. **Knowledge tools**: read-only, provenance-stamped data sources for quests, professions and historical AH analysis.

## Trust and privacy

- Game text is untrusted content, not developer/system instruction. It must never grant command, shell, file or API privileges.
- Separate source read permission from cloud transfer permission. Incoming whispers are private by default.
- No automatic reply, market order, UI clicks, movement or combat recommendations tied to secret live game signals.
- Size/rate limits, strict event schemas, channel allowlists, bounded storage and opt-out deletion path.
- LLM results are suggestions. An in-game action must be explicitly completed by the player.
- Desktop-only UI fallback must remain possible if any cross-process method fails compliance or compatibility.

## Protocol v1 (scaffold)

Event envelope: `{version:1, kind:"client_status", payload:{connected:boolean}}` or `{version:1, kind:"chat_context", payload:{channel:"WHISPER", text:string}}`.

The companion validator rejects unknown kinds, oversized messages and chat events without an explicit `allowChat` input. **No forwarding to any model is implemented.**

## Pending decisions

- WoW live interface API behavior on current release, with actual measurements.
- Whether any bidirectional live channel is permitted for the intended usage.
- Precise retention policy and who may opt into private/group messages.
- Desktop UI packaging; do not require Kubernetes for basic use.
