import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const uri = 'https://www.nerdfonts.com/assets/css/webfont.css'
console.log(`fetching icons... ${uri}`);
const request = await fetch(uri);
const csstext = await request.text();
const matches = Array.from(csstext.matchAll(/\.nf-[^:.\s,()]+:before{content:"[^"]+"}/g));
const nfmeta = {
	version: csstext.match(/(?<=Version: )\S+/)[0],
	website: csstext.match(/(?<=Website: )\S+/)[0],
}
/** @type {Record<string, number>} */
const object = {};
console.log(`${matches.length} icons`);
if (matches.length < 10000) {
	console.log('it\'s strange. should be more than 10000')
	process.exit(1)
}
for (const [element] of matches) {
	const classname = element.slice(1, element.indexOf(':'));
	const charHexCode = element.slice(element.indexOf('"\\') + 2, element.lastIndexOf('"'));
	object[classname] = Number('0x' + charHexCode);
}

const distinationMeta = path.join(process.cwd(), 'mappings-meta.json')
console.log(`writing... ${distinationMeta}`)
await fs.writeFile(distinationMeta, JSON.stringify(nfmeta, null, '\t'));
const distination = path.join(process.cwd(), 'mappings.json')
console.log(`writing... ${distination}`)
await fs.writeFile(distination, JSON.stringify(object, null, '\t'));
console.log(`done`);

