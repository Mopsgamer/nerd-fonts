import mappingsJSON from '../mappings.json' with {type: 'json'};

export type GlyphIcon = {
	/**
     * Glyph character.
     */
	char: string;
	hexCode: number;
	/**
	 * The icon's color.
	 */
	color?: number;
};

export type Mapping = {
	byPartial: Map<string, GlyphIcon>;
	byExtension: Map<string, GlyphIcon>;
	byDefault: GlyphIcon;
};

export type IconsCollection = 'seti';

export const icons = Object.fromEntries(Object.entries(mappingsJSON).map(
	([classname, charHex]) => ([classname, {
		char: String.fromCodePoint(charHex),
		hexCode: charHex,
	} satisfies GlyphIcon]),
)) as Record<keyof typeof mappingsJSON, GlyphIcon>;

export default icons;
