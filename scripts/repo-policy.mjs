// Portable public-repository controls. Not a substitute for PRE-publication review.
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mandatory = [
  'README.md', 'LICENSE', 'AGENTS.md', 'SECURITY.md', 'THIRD_PARTY.md',
  'docs/PROJECT_SCOPE.md', 'docs/GOVERNANCE.md', 'docs/QUALITY_POLICY.md',
  'docs/TEST_STRATEGY.md', 'docs/DEVELOPMENT_PLAYBOOK.md',
  'docs/PRIVACY_AND_DISCLOSURE.md', 'docs/REPOSITORY_RULESET.md',
  'docs/WORK_INDEX.md', 'docs/HANDOFF.md', 'docs/EVIDENCE.md',
  'docs/RELEASE_POLICY.md', 'docs/TOOLCHAIN.md', 'docs/DECISIONS.md',
  '.github/workflows/ci.yml', '.github/workflows/codeql.yml',
  '.github/pull_request_template.md'
];

export function auditWorkflow(content) {
  const errors = [];
  if (!/^permissions:\s*$/m.test(content)) errors.push('must declare top-level permissions');
  if (/^\s*pull_request_target\s*:/m.test(content)) errors.push('pull_request_target is forbidden');
  if (/runs-on:\s*(?:\[\s*)?self-hosted\b/i.test(content)) errors.push('self-hosted runner not permitted for public CI');
  const uses = [...content.matchAll(/^\s*-\s*uses:\s*([^\s#]+)/gm)].map(m => m[1]);
  if (uses.length === 0) errors.push('no checked action usage');
  for (const spec of uses) {
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(?:\/[A-Za-z0-9_.-]+)?@[0-9a-f]{40}$/.test(spec)) {
      errors.push('action must be pinned to a 40-hex immutable commit');
    }
  }
  return errors;
}

export function auditTrackedName(path) {
  const name = path.replaceAll('\\', '/');
  const parts = name.split('/');
  if (parts.some(p => ['secrets', 'credentials', 'SavedVariables', 'captures', 'chatlogs'].includes(p))) return 'restricted data directory';
  if (parts.some(p => p === '.env' || (p.startsWith('.env.') && p !== '.env.example'))) return 'environment credentials';
  if (/\.(sqlite3?|db|pem|key|p12|pfx)$/i.test(name)) return 'private or binary credential/database artifact';
  if (/WoWChatLog\.txt$/i.test(name)) return 'private chat log';
  return null;
}

export function auditPublicText(content) {
  // Generic known-secret forms only. Never commit a list of actual private indicators.
  const patterns = [
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    /\bgh[pousr]_[A-Za-z0-9]{20,}\b/,
    /\bgithub_pat_[A-Za-z0-9_]{30,}\b/,
    /\bsk-(?:proj-)?[A-Za-z0-9_-]{24,}\b/
  ];
  return patterns.some(re => re.test(content)) ? 'possible credential format' : null;
}

export function run() {
  const problems = [];
  for (const path of mandatory) if (!existsSync(resolve(root, path))) problems.push(`${path}: required policy/tool file missing`);
  const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' }).split('\0').filter(Boolean);
  for (const path of tracked) {
    const nameIssue = auditTrackedName(path);
    if (nameIssue) problems.push(`${path}: ${nameIssue}`);
    const file = resolve(root, path);
    if (!existsSync(file)) continue;
    const content = readFileSync(file, 'utf8');
    const textIssue = auditPublicText(content);
    if (textIssue) problems.push(`${path}: ${textIssue}`);
    if (path.startsWith('.github/workflows/') && /\.ya?ml$/i.test(path)) {
      for (const issue of auditWorkflow(content)) problems.push(`${path}: ${issue}`);
    }
  }
  if (problems.length) {
    for (const issue of problems) console.error(issue); // never log matched credential value
    process.exitCode = 1;
  } else {
    console.log(`Repository policy: PASS (${tracked.length} tracked paths). Public CI does not replace pre-push private review.`);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) run();
