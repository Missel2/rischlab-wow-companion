import test from 'node:test';
import assert from 'node:assert/strict';
import { auditWorkflow, auditTrackedName, auditPublicText } from './repo-policy.mjs';

test('workflow requires pinned actions and least privilege', () => {
  const good = 'permissions:\n  contents: read\njobs:\n  a:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@' + 'a'.repeat(40) + '\n';
  assert.deepEqual(auditWorkflow(good), []);
  assert.ok(auditWorkflow(good.replace('a'.repeat(40), 'v4')).some(x => x.includes('pinned')));
  assert.ok(auditWorkflow(good.replace('permissions:\n', 'no-permissions:\n')).some(x => x.includes('permissions')));
  assert.ok(auditWorkflow(good + 'pull_request_target:\n').some(x => x.includes('pull_request_target')));
  assert.ok(auditWorkflow(good.replace('ubuntu-latest', 'self-hosted')).some(x => x.includes('self-hosted')));
});

test('private-file names are rejected without revealing identifiers', () => {
  assert.ok(auditTrackedName('captures/input.json'));
  assert.ok(auditTrackedName('project/.env.prod'));
  assert.ok(auditTrackedName('project/local.sqlite3'));
  assert.ok(auditTrackedName('project/SavedVariables/settings.lua'));
  assert.equal(auditTrackedName('companion/src/protocol.mjs'), null);
  assert.equal(auditTrackedName('.env.example'), null);
});

test('generic secret formats detected without printing secret values', () => {
  assert.equal(auditPublicText('just a synthetic message'), null);
  assert.ok(auditPublicText('-----BEGIN PRIVATE KEY-----'));
  assert.ok(auditPublicText('ghp_' + 'A'.repeat(25)));
  assert.ok(auditPublicText('sk-proj-' + 'B'.repeat(25)));
});
