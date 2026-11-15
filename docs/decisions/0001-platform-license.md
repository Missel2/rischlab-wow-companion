# ADR-0001: GitHub public MIT monorepo

**Status:** accepted for repository foundation (2026-11-15).

- Repository: Missel2/rischlab-wow-companion; public source, MIT for original implementation.
- One monorepo for Lua addon, local Node companion, protocol and tests.
- Private tokens, chat content, captured images, characters and local settings stay off GitHub.
- No mandatory cluster or paid API service for initial local development.
- Branch + PR workflow, CI as prerequisite for protected merges, no automatic releases.

Rationale: shared reviewable code, compatibility with relevant MIT-licensed examples, straightforward GitHub CI and contributions. An AGPL/CC BY-SA service can be consulted via a permitted interface without automatically adopting its code; copying remains a separate licensing decision.
