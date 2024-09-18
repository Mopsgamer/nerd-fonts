import {parse, type ParsedPath} from 'node:path';
import {type GlyphIcon} from './glyphicon.js';

export type Mapping = {
	byPartial: Record<string, GlyphIcon>;
	byExtension: Record<string, GlyphIcon>;
	byDefault: GlyphIcon;
};

export type FileIconOptions = {
	mapping: Mapping;
};

export function fileIcon(parsed: ParsedPath, options: FileIconOptions): GlyphIcon;
export function fileIcon(filePath: string, options: FileIconOptions): GlyphIcon;
export function fileIcon(argument1: ParsedPath | string, options: FileIconOptions): GlyphIcon {
	const {mapping} = options;
	const parsed = typeof argument1 === 'string' ? parse(argument1) : argument1;
	const {ext, base} = parsed;
	const foundExtension: GlyphIcon | undefined = mapping.byExtension[ext];
	if (foundExtension) {
		return foundExtension;
	}

	const foundPartial = Object.entries(mapping.byPartial).find(([key]) => base.includes(key));
	if (foundPartial) {
		const [, glyphicon] = foundPartial;
		return glyphicon;
	}

	return mapping.byDefault;
}
