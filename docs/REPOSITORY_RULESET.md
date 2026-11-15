# GitHub branch ruleset – maintainer setup contract

**Desired state, not active enforcement.** GitHub ruleset must be configured by an authorized repository administrator after stable check names exist. Do not claim protection until the GitHub ruleset API returns `active`.

Reference: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository

## One branch ruleset: main-protection
- Enforcement: **Active**; target default branch `main`.
- Require a pull request before merging; single maintainer starts with **0 required external approvals** (GitHub cannot treat an agent's own review as independent). Chat authorization remains mandatory by policy.
- Require status checks on current commit; require branch to be up to date with base.
- Require conversation resolution and linear history.
- Block force pushes and deletions; no bypass actors.
- Required GitHub Actions check names (verify exact strings in PR before enabling):
  - `addon`
  - `companion (ubuntu-latest)`
  - `companion (windows-latest)`
  - `governance`
  - CodeQL check once successfully registered (exact job label from run; do not guess).
- Keep squash merge as sole enabled strategy in repository settings.

## Rollout plan
1. Stabilize the current bootstrap PR's actual GitHub Actions checks.
2. Inspect CodeQL and other policy-job results and confirm their actual names.
3. Activate the ruleset, read it back, verify a harmless direct-push attempt is blocked if safely testable, and confirm PR flow still works.
4. Record evidence in `docs/EVIDENCE.md`, with timestamp and actual ruleset ID. No screenshot is a substitute for API readback.

Do not require paid-plan-only features or external reviewers if they would block the single-maintainer workflow. The ruleset is not a substitute for explicit user approval of merges, releases or game integrations.
