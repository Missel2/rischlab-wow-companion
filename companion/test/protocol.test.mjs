import test from 'node:test';
import assert from 'node:assert/strict';
import { parseEvent, PROTOCOL_VERSION } from '../src/protocol.mjs';

test('accepts sanitized client status', () => {
  const data = parseEvent({ version: PROTOCOL_VERSION, kind: 'client_status', payload: { connected: false, privateKey: 'discard' } });
  assert.deepEqual(data, { version: 1, kind: 'client_status', payload: { connected: false } });
  assert.equal(Object.isFrozen(data), true);
});

test('chat is denied by default', () => {
  assert.throws(() => parseEvent({ version: 1, kind: 'chat_context', payload: { channel: 'WHISPER', text: 'hi' } }), /consent/);
});

test('chat context needs permitted channel and bounded size', () => {
  const valid = parseEvent({ version: 1, kind: 'chat_context', payload: { channel: 'WHISPER', text: 'hi', token: 'drop' } }, { allowChat: true });
  assert.deepEqual(valid.payload, { channel: 'WHISPER', text: 'hi' });
  assert.throws(() => parseEvent({ version: 1, kind: 'chat_context', payload: { channel: 'GUILD', text: 'hi' } }, { allowChat: true }), /channel/);
  assert.throws(() => parseEvent({ version: 1, kind: 'chat_context', payload: { channel: 'WHISPER', text: 'x'.repeat(1025) } }, { allowChat: true }), /length/);
});

test('unknown versions and events are rejected', () => {
  assert.throws(() => parseEvent({ version: 2, kind: 'client_status', payload: { connected: true } }), /version/);
  assert.throws(() => parseEvent({ version: 1, kind: 'execute', payload: {} }), /unknown/);
  assert.throws(() => parseEvent(null), /object/);
});
