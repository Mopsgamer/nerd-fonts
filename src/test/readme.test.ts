import assert from "node:assert";
import { readFileSync } from "node:fs";
import { it } from "node:test";
import { mappingsMeta } from "../mappings.js";

const readme = String(readFileSync("README.md"));

function toSpacedNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

void it("README content", () => {
  assert.ok(readme.includes(`\`${mappingsMeta.version}\`.`));
  assert.ok(readme.includes(`${toSpacedNumber(mappingsMeta.total)} icons`));
});
