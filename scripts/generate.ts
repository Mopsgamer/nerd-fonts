import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { Logger } from '@m234/logger'
import mappingsMeta from '../mappings-meta.json'
import chalk from 'chalk'

using logger = new Logger('Generator')

async function generateMappings() {
  // const uri = 'https://www.nerdfonts.com/assets/css/webfont.css'
  const uri = 'https://raw.githubusercontent.com/ryanoasis/nerd-fonts/refs/heads/master/css/nerd-fonts-generated.min.css'

  logger.start(`Fetching icons from ${uri}`)
  const request = await fetch(uri)
  const csstext = await request.text()
  logger.end()

  const matches = Array.from(csstext.matchAll(/\.nf-[^:.\s,()]+:before{content:"[^"]+"}/g))
  const mappings: Record<string, number> = {}

  const diff = matches.length - mappingsMeta.total
  let diffInfo = ''
  if (diff > 0) diffInfo = ' ' + chalk.green('+' + diff.toString())
  else if (diff < 0) diffInfo = ' ' + chalk.red(diff.toString())
  logger.info('Got ' + matches.length + ' icons.' + diffInfo)
  if (matches.length < 10000) {
    logger.error('It\'s strange. should be more than 10000.')
    process.exit(1)
  }

  for (const [element] of matches) {
    const classname = element.slice(1, element.indexOf(':'))
    const charHexCode = element.slice(element.indexOf('"\\') + 2, element.lastIndexOf('"'))
    mappings[classname] = Number('0x' + charHexCode)
  }

  const newMappingsMeta = {
    version: csstext.match(/(?<=Version: )\S+/)![0],
    website: csstext.match(/(?<=Website: )\S+/)![0],
    total: matches.length,
  }

  const mappingsMetaPath = path.join(process.cwd(), 'mappings-meta.json')
  logger.start(`Writing to ${mappingsMetaPath}`)
  await fs.writeFile(mappingsMetaPath, JSON.stringify(newMappingsMeta, null, '\t'))
  logger.end()
  const mappingsPath = path.join(process.cwd(), 'mappings.json')
  logger.start(`Writing to ${mappingsPath}`)
  await fs.writeFile(mappingsPath, JSON.stringify(mappings, null, '\t'))
  logger.end()
}

await generateMappings()
