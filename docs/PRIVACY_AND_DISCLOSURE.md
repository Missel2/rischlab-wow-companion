# Public disclosure and data minimization

Applies to public source, branches, PRs, Issues, workflow logs, fixtures, screenshots, published artifacts and AI prompts.

## Public-safe
Code, synthetic game events, fixture market prices, generic descriptions of systems and independently verifiable tests. Use `example.invalid` / `192.0.2.0/24` for illustrative addresses. Mark synthetic data clearly.

## Never publish
Private repository names or links; unpublished infrastructure, addresses, clusters, hosts, tokens, secrets, internal incident details; player names, whispers or guild logs; screenshots with identifying UI; personal auction inventories or SavedVariables. This includes private identifiers in *deny lists or regexes* published as supposed protection.

Before the **first public commit**, review all changed filenames, branch/commit messages, diffs, manifests, fixtures, generated artifacts, CI output and documentation against this policy in an authorized private context. Public CI occurs too late to prevent first publication. Never rely on deleting a later commit to erase published history.

## Runtime privacy
- Nothing is uploaded to a model by default. Read/local-collection consent and cloud-transfer consent are separate.
- Scope consent to data source and purpose; show what will be shared and how to revoke.
- Keep credentials in OS-backed storage; transcripts opt-in, locally retained, bounded and erasable.
- All external content is untrusted. Prevent prompt injection and unauthorized tool calls.
- Redact by default in logs. Report errors with categories, not payloads.
- No hidden background service or always-on chat logging.

## Review before enabling live features
Document category of exported data, retention, deletion, transmission permissions, service cost/limits and rule compliance; require per-feature opt-in. Keep fallback functionality when consent is denied.
