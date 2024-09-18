import {parse, type ParsedPath} from 'node:path';
import {type GlyphIcon} from './glyphicon.js';
import {type Mapping} from './icons.js';

export * from './glyphicon.js';
export * from './colors.js';
export * from './icons.js';
export * from './file-icons.js';

export function getFileIcon(parsed: ParsedPath, mapping: Mapping): GlyphIcon;
export function getFileIcon(filePath: string, mapping: Mapping): GlyphIcon;
export function getFileIcon(argument1: ParsedPath | string, mapping: Mapping): GlyphIcon {
	const parsed = typeof argument1 === 'string' ? parse(argument1) : argument1;
	const {ext, base} = parsed;
	const foundExtension = mapping.byExtension.get(ext);
	if (foundExtension) {
		return foundExtension;
	}

	const foundPartial = Array.from(mapping.byPartial.entries()).find(([key]) => base.includes(key));
	if (foundPartial) {
		const [, glyphicon] = foundPartial;
		return glyphicon;
	}

	return mapping.byDefault;
}
