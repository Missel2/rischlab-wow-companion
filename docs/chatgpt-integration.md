# ChatGPT-plan connectivity research and acceptance

Official entry points:
- https://developers.openai.com/siwc/quickstart
- https://developers.openai.com/siwc/token-sharing-open-source
- https://developers.openai.com/siwc/token-sharing-open-source/preview-limitations

**Not implemented**. The open-source local-app flow can enable eligible users to authorize ChatGPT plan usage through OAuth. Eligibility, scopes, supported models, limit behavior and protocol requirements must be checked at integration time.

Minimum PoC:
1. Stable per-host `ext_agent_host_id` and PKCE browser login.
2. Validate ID token, OAuth state, issuer/audience, grants (including `chatgpt.tokens.use.direct` when required) and secure refresh/revocation.
3. Store sensitive tokens in OS-backed secret storage, not game SavedVariables, repo or logs.
4. Fetch eligible models, request one user-initiated streamed response, show app usage/limit errors.
5. Support logout and opt-out. No fallback to metered API without independent opt-in.
6. Preview request requirements may include `store:false`, `stream:true` and explicit history; implement from current docs, not assumptions.
7. Prove OAuth functionality in desktop-only mode, without WoW or chat data.

The login does **not** grant access to normal ChatGPT conversations, personal memory or any WoW account.
