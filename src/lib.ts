import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const mappingsJsonMeta = require('../mappings.json') as typeof import('../mappings.json'); // eslint-disable-line @typescript-eslint/consistent-type-imports

export const nfMeta = mappingsJsonMeta;
export * from './icons.js';
export * as FSC from './file-icons.js';
