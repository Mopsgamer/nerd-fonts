import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { Logger, printErrors, TaskRunnerReturn } from "@m234/logger";
import mappings from "../mappings.json" with { type: "json" };
import chalk from "chalk";

const logger = new Logger({ prefix: "Generator" });

async function generateMappings() {
  // const uri = 'https://www.nerdfonts.com/assets/css/webfont.css'
  const uri =
    "https://raw.githubusercontent.com/ryanoasis/nerd-fonts/refs/heads/master/css/nerd-fonts-generated.min.css";

  let csstext: string;
  await logger.task({ text: `Fetching icons from ${uri}` }).startRunner(
    printErrors(logger, async (): Promise<TaskRunnerReturn> => {
      const request = await fetch(uri);
      csstext = await request.text();
      return "completed";
    }),
  );

  if (!csstext!) throw new Error("Failed to fetch CSS text.");

  const matches = Array.from(csstext.matchAll(/\.nf-[^:.\s,()]+:before{content:"[^"]+"}/g));
  const newMappings: Record<string, number> = {};

  for (const [element] of matches) {
    const classname = element.slice(1, element.indexOf(":"));
    const charHexCode = element.slice(element.indexOf('"\\') + 2, element.lastIndexOf('"'));
    newMappings[classname] = Number("0x" + charHexCode);
  }

  const prevKeys = new Set(Object.keys(mappings));
  const newKeys = new Set(Object.keys(newMappings));
  const added = [...newKeys].filter((k) => !prevKeys.has(k));
  const removed = [...prevKeys].filter((k) => !newKeys.has(k));
  let diffInfo = "";
  if (added.length > 0)
    diffInfo += `\n${chalk.green("Added:")}\n${added.map((k) => "  - " + k).join("\n")}`;
  if (removed.length > 0)
    diffInfo += `\n${chalk.red("Removed:")}\n${removed.map((k) => "  - " + k).join("\n")}`;
  void logger.info("Got " + matches.length + " icons." + diffInfo);
  if (matches.length < 10000) {
    void logger.error("It's strange. should be more than 10000.");
    process.exit(1);
  }

  const newMappingsMeta = {
    version: csstext.match(/(?<=Version: )\S+/)![0],
    website: csstext.match(/(?<=Website: )\S+/)![0],
    total: matches.length,
  };

  const mappingsMetaPath = path.join(process.cwd(), "mappings-meta.json");
  await logger
    .task({ text: `Writing to ${mappingsMetaPath}` })
    .startRunner(
      printErrors(
        logger,
        fs.writeFile(mappingsMetaPath, JSON.stringify(newMappingsMeta, null, "\t")),
      ),
    );
  const mappingsPath = path.join(process.cwd(), "mappings.json");
  await logger
    .task({ text: `Writing to ${mappingsPath}` })
    .startRunner(
      printErrors(logger, fs.writeFile(mappingsPath, JSON.stringify(newMappings, null, "\t"))),
    );
}

await generateMappings();
