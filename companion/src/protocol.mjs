// v1 strict data contract: pure validation only; no storage, transport or model calls.
export const PROTOCOL_VERSION = 1;
const MAX_CHAT_LENGTH = 1024;

export function parseEvent(input, { allowChat = false } = {}) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new TypeError('event must be an object');
  }
  if (input.version !== PROTOCOL_VERSION) {
    throw new RangeError('unsupported protocol version');
  }
  if (!input.payload || typeof input.payload !== 'object' || Array.isArray(input.payload)) {
    throw new TypeError('invalid payload');
  }
  if (input.kind === 'client_status') {
    if (typeof input.payload.connected !== 'boolean') throw new TypeError('invalid status');
    return Object.freeze({ version: PROTOCOL_VERSION, kind: 'client_status', payload: Object.freeze({ connected: input.payload.connected }) });
  }
  if (input.kind === 'chat_context') {
    if (!allowChat) throw new Error('chat context requires explicit consent');
    if (input.payload.channel !== 'WHISPER') throw new Error('unsupported chat channel');
    if (typeof input.payload.text !== 'string' || input.payload.text.length === 0 || input.payload.text.length > MAX_CHAT_LENGTH) {
      throw new RangeError('invalid chat length');
    }
    return Object.freeze({
      version: PROTOCOL_VERSION,
      kind: 'chat_context',
      payload: Object.freeze({ channel: 'WHISPER', text: input.payload.text })
    });
  }
  throw new Error('unknown event kind');
}
