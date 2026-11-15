# ADR-0002: Human in control and separated transports

**Status:** accepted as guardrail (2026-11-15).

- The product must not send chat, make trades or perform gameplay on behalf of the player.
- Advice is distinct from game commands; proposed responses are editable and manually transmitted.
- Transport selection cannot be used to circumvent restrictions or game policies.
- Third-party text never becomes tool instruction; plugins and LLMs get no ambient file/shell authority.
- Local desktop fallback is a first-class implementation path.
- In-game live return transport has a separate policy and compatibility acceptance gate.

Consequence: first prototype can validate an addon and official model login separately; live connectivity is not presumed safe or approved.
