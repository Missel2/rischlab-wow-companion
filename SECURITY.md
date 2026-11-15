# Security policy

This project is pre-release and does not yet have a supported deployment.

**Do not publish** OAuth credentials, access/refresh tokens, private chat, screenshots, character data, personal auction scans, or identifying server logs in GitHub Issues or PRs.

Please report security defects through GitHub's private vulnerability reporting if enabled. Otherwise, contact the maintainer privately through GitHub before publishing technical exploit details.

Controls expected before a connected release:
- OAuth PKCE, token validation, OS-backed credential storage, token rotation and revocation.
- Consent per chat channel/data source and a visible kill switch.
- No implicit network access, game action or shell execution from LLM output.
- Bounded event size, timeouts, redact-at-source logging and local retention settings.
- Dependency and source/license audit; tested permission-negative cases.
