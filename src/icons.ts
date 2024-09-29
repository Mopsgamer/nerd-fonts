import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const mappingsJson = require('../mappings.json') as typeof import('../mappings.json'); // eslint-disable-line @typescript-eslint/consistent-type-imports

/**
 * Contains Nerd Fonts icon.
 */
export type NerdIcon = {
	/**
     * Glyph character.
     */
	char: string;
	/**
     * Glyph character as a hex number.
     */
	hexCode: number;
	/**
	 * The icon's color.
	 */
	color?: number;
};

/**
 * Determines how the icon for a file/folder path will be calculated.
 */
export type Mapping = {
	byBase?: Map<string, NerdIcon>;
	byExtension?: Map<string, NerdIcon>;
	byDefault: NerdIcon;
};

/**
 * Contains all Nerd Fonts icons.
 */
export const icons = Object.fromEntries(Object.entries(mappingsJson).map(
	([classname, charHex]) => ([classname, {
		char: String.fromCodePoint(charHex),
		hexCode: charHex,
	} satisfies NerdIcon]),
)) as Record<keyof typeof mappingsJson, NerdIcon>;

export default icons;
