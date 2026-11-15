# Test strategy and confidence ladder

## Layers
| Layer | Environment | What it proves | What it does not prove |
|---|---|---|---|
| Lua syntax + mocked addon events | GitHub-hosted Linux / Lua 5.1 | API usage, command/buffer invariants in mocks | Real client behavior |
| Protocol + deterministic market calculation | Node.js test runner, Linux and Windows | Schema bounds, arithmetic, rejection paths | Correct game API data |
| Repository policy + dependency scanning | GitHub-hosted runner | Tracked-file/workflow patterns and accidental well-known tokens | All possible leaks (pre-push private review required) |
| Static security analysis (CodeQL) | GitHub Actions JS/TS | Findings supported by static analysis | Absence of vulnerabilities or Lua coverage |
| Isolated local bridge simulation | No game account, synthetic events | Latency, ordering, loss/recovery, cancellation | Blizzard permission or real client compatibility |
| Actual Forever release client | User-authorized; sanitized evidence | Addon load, UI, chosen interfaces, regressions | Future updates, legal approval |
| Model OAuth integration | User-initiated external auth | Consents, token handling, quotas, failure UX | WoW connectivity |

## Negative / fault tests required when relevant
- Default-deny chat capture and cloud transmission, per-source consent revoked mid-request.
- Malformed/out-of-order/oversize/duplicate/replayed/untrusted game payloads.
- Disk full, bridge disconnect, WoW reload/restart, stale data, incomplete result, API 429, OAuth expiration and cancellation.
- Prompt injection inside player chat: never becomes a tool command or permission grant.
- AH: unsold, withdrawn and expired listings cannot be labeled as verified sales; no direct purchase path.
- Cross-platform artifact identity/line endings when installing or packaging begins.

## CI now
- `addon`: Lua 5.1 syntax + mocked event smoke test, Linux.
- `companion (ubuntu-latest)` and `companion (windows-latest)`: Node 26 protocol tests.
- `governance`: repository-policy static checks and negative controls.
- `CodeQL / analyze`: JS/TS static checks (no Lua analysis).
- No self-hosted runners, secrets or production client connections.

## Future upgrades
Add TypeScript strict/lint when TS code exists; add dependency lockfile/SBOM once dependencies exist; real transport reliability tests and repeatable release-package install tests before shipping. Do not claim missing infrastructure as already tested.
