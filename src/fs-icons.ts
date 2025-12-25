import { type ParsedPath } from "node:path";
import { type NerdIcon } from "./icons.js";
import * as Seti from "./fs-collections/seti.js";

export * as Seti from "./fs-collections/seti.js";

/**
 * Supported collection names.
 */
export type IconCollection = "seti";

/**
 * Determines how the icon for a file/folder path will be calculated.
 */
export type NerdIconCallback<T extends ParsedPath | string = ParsedPath | string> = (
  parsed: T,
) => NerdIcon;

/**
 * Can be used within {@link fromPath} function.
 */
export const collections: Record<IconCollection, NerdIconCallback> = {
  seti: Seti.fromPath,
};

/**
 * Get an icon for a file path or parsed object of this path.
 */
export function fromPath<T extends ParsedPath | string>(
  path: T,
  collection: NerdIconCallback<T> | IconCollection = "seti",
): NerdIcon {
  if (typeof collection === "string") {
    return collections[collection](path);
  }

  return collection(path);
}
