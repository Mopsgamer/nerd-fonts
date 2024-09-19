import mappingsJSON from '../mappings.json' with {type: 'json'};

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
export const icons = Object.fromEntries(Object.entries(mappingsJSON).map(
	([classname, charHex]) => ([classname, {
		char: String.fromCodePoint(charHex),
		hexCode: charHex,
	} satisfies NerdIcon]),
)) as Record<keyof typeof mappingsJSON, NerdIcon>;

export default icons;
