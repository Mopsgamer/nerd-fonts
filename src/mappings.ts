/* eslint-disable @typescript-eslint/consistent-type-imports */
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
/**
 * Glyph char hex code for each class name.
 */
export const mappings = require('../mappings.json') as typeof import('../mappings.json');

/**
 * Nerd Fonts meta information. Such as version.
 */
export const mappingsMeta = require('../mappings-meta.json') as typeof import('../mappings-meta.json');
