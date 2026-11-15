# Toolchain decisions and staged modernization

## Foundation (active)
| Layer | Choice | Why |
|---|---|---|
| Source and review | GitHub public MIT mono-repo, PRs, squash merges | Auditability and community contributions |
| Game addon | Lua 5.1-compatible syntax, Forever TOC 16001 | Conservative testable subset; verify actual client APIs |
| Desktop companion | Node.js 26 LTS, ECMAScript modules | Lightweight local process with built-in test runner |
| Tests | Lua mocks, `node:test`, Linux/Windows Actions | No dependency install for first scaffold |
| Protocol | Versioned, allowlisted event envelopes | Security boundary between game data and model |
| Static analysis | CodeQL JS/TS, Lua syntax checking | Coverage of supported languages without pretending Lua CodeQL support |
| Data storage | Local-first, consider SQLite after data model | No mandatory cloud or cluster |
| AI | Official account-authorized OAuth or separately opted-in API/local LLM | Explicit plan/billing limits; interchangeable provider |
| Reliability | Versioned source, exact-SHA CI, readable errors | Reproducible evidence |

## Later, after a proof
- TypeScript strict mode + ESLint for growing companion code; avoid introducing unused frameworks.
- React/Vite for context-oriented desktop UI if the first simple UI needs it; Tauri packaging as a separate evaluated choice.
- SQLite schema migration and offline deterministic AH analytics with source/time provenance.
- Content-addressed GitHub Release bundles, SBOM, cross-platform package tests and code signing as distribution warrants.
- Optional remote storage only for an evidenced requirement; never require a private cluster.

## Supply-chain discipline
Pin GitHub Actions to reviewed immutable commit SHAs; update through reviewed PRs/Dependabot. Use explicit least-privilege workflow permissions and no PR workflow with write or private infrastructure credentials.

## External components
Treat known examples as references until a specific import PR reviews the actual license, release/version, API compatibility, security and provenance. No broad code copying.
