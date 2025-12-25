import assert from "node:assert";
import { icons, collections, fromPath, Seti, iconsMap, mappingsMeta } from "../index.js";
import { it } from "node:test";
import path from "node:path";

void it("icons", () => {
  assert.ok(icons["nf-cod-add"]);
  assert.ok(iconsMap.get("nf-cod-add"));
  assert.strictEqual(Object.keys(icons).length, mappingsMeta.total);
  assert.strictEqual(iconsMap.size, mappingsMeta.total);
});

void it("Seti.fromPath", () => {
  assert.strictEqual(
    Seti.fromPath(path.parse("file.ts"))?.value,
    icons["nf-seti-typescript"].value,
  );
  assert.strictEqual(Seti.fromPath("file.ts")?.value, icons["nf-seti-typescript"].value);
});

void it("fromPath custom file.ts/", () => {
  assert.strictEqual(
    fromPath("file.ts/", (base) => {
      if (base.endsWith("/")) return icons["nf-seti-folder"];
      return fromPath(base, "seti");
    })?.value,
    icons["nf-seti-folder"].value,
  );
});

void it("fromPath file.ts", () => {
  assert.strictEqual(
    fromPath("file.ts", collections.seti)?.value,
    icons["nf-seti-typescript"].value,
  );
  assert.strictEqual(fromPath("file.ts", "seti")?.value, icons["nf-seti-typescript"].value);
});

void it("fromPath file.d.ts", () => {
  assert.strictEqual(
    fromPath("file.d.ts", collections.seti)?.value,
    icons["nf-seti-typescript"].value,
  );
});

void it("fromPath file", () => {
  assert.strictEqual(fromPath("file", collections.seti)?.value, icons["nf-seti-text"].value);
});

void it("fromPath .gitignore", () => {
  assert.strictEqual(
    fromPath(".gitignore", collections.seti)?.value,
    icons["nf-seti-git_ignore"].value,
  );
});

void it("fromPath LICENSE", () => {
  assert.strictEqual(fromPath("LICENSE", collections.seti)?.value, icons["nf-seti-license"].value);
});

void it("fromPath LICENSE.txt", () => {
  assert.strictEqual(
    fromPath("LICENSE.txt", collections.seti)?.value,
    icons["nf-seti-license"].value,
  );
});
