
import {parse, type ParsedPath} from 'node:path';
import {
	type NerdIcon,
} from './icons.js';
import * as Seti from './fs-collections/seti.js';

export * as Seti from './fs-collections/seti.js';

/**
 * Path parsed object.
 */
export type Parsed = Pick<ParsedPath, 'base'>;

/**
 * Supported collection names.
 */
export type IconCollection = 'seti';

/**
 * Determines how the icon for a file/folder path will be calculated.
 */
export type NerdIconCallback = (parsed: Parsed) => NerdIcon;

/**
 * Can be used within {@link fromPath} function.
 */
export const collections: Record<IconCollection, NerdIconCallback> = {
	seti: Seti.fromParsedPath,
};

/**
 * Get an icon for a file/folder path or parsed object of this path.
 */
export function fromPath(parsed: Parsed, callback: NerdIconCallback): NerdIcon | undefined;
export function fromPath(parsed: Parsed, collection: IconCollection): NerdIcon | undefined;
export function fromPath(filePath: string, callback: NerdIconCallback): NerdIcon | undefined;
export function fromPath(filePath: string, collection: IconCollection): NerdIcon | undefined;
export function fromPath(argument1: Parsed | string, callback: NerdIconCallback | IconCollection): NerdIcon | undefined {
	const parsed = typeof argument1 === 'string' ? parse(argument1) : argument1;

	if (typeof callback === 'string') {
		return collections[callback](parsed);
	}

	return callback(parsed);
}
