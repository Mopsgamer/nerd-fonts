import {parse, type ParsedPath} from 'node:path';
import byFileExtension from './by-file-extension.js';
import {type GlyphIcon} from './glyphicon.js';
import {type IconsCollectionFileSupported} from './icons-collection.js';
import byName from './by-name.js';

export function fileIcon(collection: IconsCollectionFileSupported, parsed: ParsedPath): GlyphIcon;
export function fileIcon(collection: IconsCollectionFileSupported, filePath: string): GlyphIcon;
export function fileIcon(collection: IconsCollectionFileSupported, argument1: ParsedPath | string): GlyphIcon {
	const extension = typeof argument1 === 'string' ? parse(argument1) : argument1.ext;
	return byFileExtension[extension] ?? byName['nf-seti-default'];
}
