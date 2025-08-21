import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { Logger } from '@m234/logger'

using logger = new Logger('nf-generator')

// const uri = 'https://www.nerdfonts.com/assets/css/webfont.css'
const uri = 'https://raw.githubusercontent.com/ryanoasis/nerd-fonts/refs/heads/master/css/nerd-fonts-generated.min.css'
logger.start(`Fetching icons from ${uri}`)
const request = await fetch(uri)
const csstext = await request.text()
logger.end()
const matches = Array.from(csstext.matchAll(/\.nf-[^:.\s,()]+:before{content:"[^"]+"}/g))

const mappings: Record<string, number> = {}
logger.info(`Got ${matches.length} icons.`)
if (matches.length < 10000) {
  logger.error('It\'s strange. should be more than 10000.')
  process.exit(1)
}
for (const [element] of matches) {
  const classname = element.slice(1, element.indexOf(':'))
  const charHexCode = element.slice(element.indexOf('"\\') + 2, element.lastIndexOf('"'))
  mappings[classname] = Number('0x' + charHexCode)
}

const mappingsMeta = {
  version: csstext.match(/(?<=Version: )\S+/)![0],
  website: csstext.match(/(?<=Website: )\S+/)![0],
  total: matches.length,
}

const mappingsMetaPath = path.join(process.cwd(), 'mappings-meta.json')
logger.start(`Writing to ${mappingsMetaPath}`)
await fs.writeFile(mappingsMetaPath, JSON.stringify(mappingsMeta, null, '\t'))
logger.end()
const mappingsPath = path.join(process.cwd(), 'mappings.json')
logger.start(`Writing to ${mappingsPath}`)
await fs.writeFile(mappingsPath, JSON.stringify(mappings, null, '\t'))
logger.end()
