import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import {Logger} from "@m234/logger";

using logger = new Logger("nf-generator");

// const uri = 'https://www.nerdfonts.com/assets/css/webfont.css'
const uri = 'https://raw.githubusercontent.com/ryanoasis/nerd-fonts/refs/heads/master/css/nerd-fonts-generated.min.css'
logger.start(`Fetching icons from ${uri}`);
const request = await fetch(uri);
const csstext = await request.text();
logger.end();
const matches = Array.from(csstext.matchAll(/\.nf-[^:.\s,()]+:before{content:"[^"]+"}/g));
const nfmeta = {
	version: csstext.match(/(?<=Version: )\S+/)![0],
	website: csstext.match(/(?<=Website: )\S+/)![0],
}
/** @type {Record<string, number>} */
const object = {};
logger.info(`Got ${matches.length} icons.`);
if (matches.length < 10000) {
	logger.error('It\'s strange. should be more than 10000.')
	process.exit(1)
}
for (const [element] of matches) {
	const classname = element.slice(1, element.indexOf(':'));
	const charHexCode = element.slice(element.indexOf('"\\') + 2, element.lastIndexOf('"'));
	object[classname] = Number('0x' + charHexCode);
}

const distinationMeta = path.join(process.cwd(), 'mappings-meta.json')
logger.start(`Writing to ${distinationMeta}`)
await fs.writeFile(distinationMeta, JSON.stringify(nfmeta, null, '\t'));
logger.end();
const distination = path.join(process.cwd(), 'mappings.json')
logger.start(`Writing to ${distination}`)
await fs.writeFile(distination, JSON.stringify(object, null, '\t'));
logger.end();

