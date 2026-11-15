# Quality policy and definition of done

This policy defines evidence requirements. Green checks are not the same as game-client compatibility.

## Evidence levels
1. **Proposed:** written idea, not implemented.
2. **Implemented:** code present on an identified commit.
3. **Unit / CI verified:** named check passed on exact head SHA.
4. **Protocol / simulated verified:** synthetic integration or isolated transport fixture passed, identified build.
5. **Client verified:** Forever **release** build observed with steps, environment and sanitized evidence.
6. **Compliance reviewed:** applicable policy and known uncertainty documented for the exact behavior.
7. **Released / installed:** exact artifact or user installation independently confirmed.

Do not replace a missing level with a higher-sounding summary. A pending check is not a failure; a skipped test is not a pass. Historical observations remain historical.

## Test-first and red/green
For defects: characterize reproducibly on a baseline, show an expected failure, implement the change, show the **same** test passing on the candidate, and keep the regression. Negative controls must reject malformed messages, consent-off paths, unavailable models and ambiguous game states. A purposely red characterization is not proof the defect is fixed.

## Definition of done per PR
- One concrete acceptance behavior and linked issue; scope and non-goals documented.
- Tests appropriate to changed surfaces, plus permission-denied and recovery conditions.
- No credentials/identifying content in code, fixtures, paths, screenshots or logs.
- Current exact-HEAD CI: addon, companion (Linux and Windows), governance, CodeQL (where applicable).
- Public-source and license check before first public push; downstream code-origin notices preserved.
- No unresolved blocking finding or unreviewed security widening.
- Readability, install/uninstall/recovery impact and user-visible error states addressed.
- Work index/handoff updated when the current milestone or gate changes.
- No merge, release or deployment implied by test success.

## Escalation / repair discipline
Prefer a fast local or CI preflight before pushing. Make one coherent commit/push per repair. If **three substantive repair cycles** fail, stop speculative patching, record root cause and switch to a bounded independent task. Never weaken checks to turn a red run green.

## Quality ownership
AI implementation, AI-created fixtures and AI self-review are **not** independent attestations. Explicitly report limitations and untested client behaviors.
