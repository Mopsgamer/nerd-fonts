export type GlyphIcon = {
	/**
      * Glyph character.
      */
	char: string;
	hexCode: number;
};

export type GlyphIconColored = GlyphIcon & {
	/**
      * The icon's color.
      */
	color: number;
};
