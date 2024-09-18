export type GlyphIcon = {
	/**
     * Glyph character.
     */
	char: string;
};

export type GlyphIconColored = GlyphIcon & {
	/**
     * The icon's color.
     */
	color: number;
};
