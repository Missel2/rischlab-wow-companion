# Source, artifact, release and installation are separate gates

A successful PR does not make a shipped product.

## Gates
1. **Source gate:** current PR checks (including static security) green, approved scope, reviewed diff and exact HEAD; authorized squash merge.
2. **Main verification:** target `main` SHA and post-merge CI complete successfully. Independently verify the expected source content.
3. **Package candidate:** build from **immutable commit/tag**, verify filenames/install paths, deterministic archive, checksums, third-party license notices and installation/uninstallation instructions. Use synthetic fixtures and no private data.
4. **Distribution approval:** human authorizes specific public GitHub Release and version. No automatic publication as side effect of CI/merge.
5. **Client installation:** separate user-controlled install into identified Forever client. No background installer, desktop injection or automatic update; note rollback.
6. **Connected feature enablement:** independently approve bridge transport, user data and OAuth permissions after gate evidence. A release cannot silently activate experimental live channels.

## Rules
- No dependencies fetched at game runtime; no bundled login tokens, local chat or game screenshots.
- Pin source and build inputs; add reproducible package fingerprint validation (Linux/Windows) as packaging matures.
- Dependency SBOM/license audit required once third-party dependencies enter shipped binaries.
- Label software-only tests, simulator tests and actual game tests independently.
- GitHub-hosted CI only for untrusted PR code; no personal infrastructure or game account in public CI.
