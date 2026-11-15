# One-session development playbook

This is a restartable, human-directed workflow. Every session acts only on its current request; no background work is implied.

## Fast entry (do not inventory all history)
1. Read `AGENTS.md`, `docs/WORK_INDEX.md`, `docs/HANDOFF.md`, `docs/GOVERNANCE.md` and relevant ADRs.
2. Check actual `main`, open relevant issues/PRs, exact active PR head, CI, discussion state and merge policy.
3. Verify that the issue still represents the next product proof. Check changed code, not every historical artifact.
4. Select *one* user-observable acceptance behavior. If a matching PR exists, continue it.
5. Implement narrowly; test locally or in hosted CI; inspect full change for public disclosure before push.
6. Wait for CI on the **last pushed SHA**; inspect failures, fix the root cause, and report real gates. Never conflate queued/pending, old red runs and current failed checks.
7. Update the short handoff: exact SHA, issue, run/checks, observed evidence, blocker and next action.
8. Request an explicit merge/release/client-install decision only if the present gate genuinely needs it; do not delegate routine clicks to the maintainer.

## Prioritization
Safety/privacy/integrity defect > broken primary user journey > measured performance > planned next milestone > optional feature/polish. Do not manufacture busywork when there is no justified next task.

## Stop conditions
- Possible private-data exposure before public push: do not push.
- Model output could trigger a game action, payment or outside network write without proper consent: stop.
- Unsupported game-interface behavior or policy uncertainty: use desktop fallback and document the gap.
- Persistent failing checks after 3 material repairs: disclose blockers, do not loop.
- No proper user authorization for merging/releasing/installing: keep reviewable PR open.

## Finish summary
State what changed, what CI/client/policy evidence exists, what is **not** proven, which PR/issues are updated, and a single next suggested action.
