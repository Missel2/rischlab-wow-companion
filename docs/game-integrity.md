# Gameplay integrity, privacy and policy gate

The addon is an advisory tool, **not** a bot. User actions remain user actions.

## Prohibited
- Simulating keyboard/mouse inputs or unattended gameplay.
- Clicking AH buy/sell/post/collect functions without the player's deliberate action.
- Automating player chat posting or unsolicited model responses.
- Reading or modifying process memory, injecting hooks, bypassing anti-cheat or exploiting private game interfaces.
- Automatically driving combat rotation, casting, movement or targeting.
- Sending player chat to external inference by default.

## Before adding any game-to-companion transport
Document source Blizzard rules and their effective date, inspect external data collection implications, and measure game behavior on the Forever **release** client. Assess third-party player privacy, storage, consent and revocation. If official approval remains ambiguous, use an external human-invoked desktop flow rather than silently enabling speculative workarounds.

The MIT license grants rights to *our code*, not an exemption from Blizzard's policies. An existing community tool proves feasibility, not compliance.

## External model access
Use official Sign in with ChatGPT/OAuth or separately configured API; never capture browser cookies. User must initiate AI requests or explicitly authorize a narrowly scoped assistance flow. Meter usage and stop on authorization/limit failures rather than silently charging an alternate billing account.
