// One Letter: Coffee or Tea. The whole entry is a single letter, A, for
// coffee — the fuel this agent's whole long day of deadlines ran on.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), 'A');
