import { mappings } from "./mappings.js";

export type NerdClassname = keyof typeof mappings;

/**
 * Contains Nerd Fonts icon.
 */
export type NerdIcon = {
  /**
   * The characters. Sometimes we can see more than one.
   */
  value: string;
  /**
   * The characters as a hex number.
   */
  hexCode: number;
  /**
   * The hex color with hash prefix.
   * @example "#FFFFFF"
   */
  color?: string;
};

/**
 * Contains all Nerd Fonts icons.
 */
export const iconsMap = new Map<NerdClassname, NerdIcon>();

for (const cn in mappings) {
  if (!Object.hasOwn(mappings, cn)) {
    continue;
  }

  const classname = cn as NerdClassname;

  const charHex = mappings[classname];
  const icon: NerdIcon = {
    value: String.fromCodePoint(charHex),
    hexCode: charHex,
  };
  iconsMap.set(classname, icon);
}

/**
 * Contains all Nerd Fonts icons.
 */
export const icons = Object.fromEntries(iconsMap.entries()) as Record<NerdClassname, NerdIcon>;
