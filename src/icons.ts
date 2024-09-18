import mappingsJSON from '../mappings.json';
import {byExtensionSeti, byPartialSeti} from './file-icons.js';
import {type GlyphIcon} from './glyphicon.js';

export type Mapping = {
	byPartial: Map<string, GlyphIcon>;
	byExtension: Map<string, GlyphIcon>;
	byDefault: GlyphIcon;
};

export type IconsCollection = 'seti';
export type IconsCollectionFileSupported = Extract<IconsCollection, 'seti'>;

export const icons = Object.fromEntries(Object.entries(mappingsJSON).map(
	([classname, charHex]) => ([classname, {
		char: String.fromCodePoint(charHex),
		hexCode: charHex,
	} satisfies GlyphIcon]),
)) as Record<keyof typeof mappingsJSON, GlyphIcon>;

export const mappings: Record<IconsCollectionFileSupported, Mapping> = {
	seti: {
		byPartial: new Map(Object.entries(byPartialSeti)),
		byExtension: new Map(Object.entries(byExtensionSeti)),
		byDefault: icons['nf-seti-text'],
	},
};

export default icons;
