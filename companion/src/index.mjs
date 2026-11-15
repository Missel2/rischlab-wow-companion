#!/usr/bin/env node
import { PROTOCOL_VERSION } from './protocol.mjs';

if (process.argv.length === 3 && process.argv[2] === '--check') {
  console.log(`RISCHLAB companion scaffold OK (protocol v${PROTOCOL_VERSION}); WoW bridge disconnected; LLM disabled.`);
} else {
  console.error('Only --check is supported in this pre-release scaffold.');
  process.exitCode = 2;
}
