import mappingsJSON from '../mappings.json';
import {byExtensionSeti, byPartialSeti} from './by-file-extension.js';
import {type GlyphIcon} from './glyphicon.js';
import {type IconsCollectionFileSupported} from './icons-collection.js';
import {type Mapping} from './index.js';

export const collection = Object.fromEntries(Object.entries(mappingsJSON).map(
	([classname, charHex]) => [classname, {
		char: String.fromCodePoint(charHex),
	} satisfies GlyphIcon]),
) as Record<keyof typeof mappingsJSON, GlyphIcon>;

export const mappings: Record<IconsCollectionFileSupported, Mapping> = {
	seti: {
		byPartial: byPartialSeti,
		byExtension: byExtensionSeti,
		byDefault: collection['nf-seti-text'],
	},
};

export default collection;
