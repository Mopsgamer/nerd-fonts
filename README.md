# @m234/nerd-fonts

[![npm version](https://badge.fury.io/js/@m234%2Fnerd-fonts.svg)](https://www.npmjs.com/package/@m234/nerd-fonts)

Get Nerd Fonts glyph icon character using a CSS class name or a file path with an extension.

## Features

 - Get Nerd Fonts icons by css class names: 10K+ icons.
 - Give a file path or a parsed object - get icon. Seti theme support with colors.
 - Built-in typescript declarations.

## Install

```bash
npm i @m234/nerd-fonts
```

## Usage

```js
import nf from "@m234/nerd-fonts";
import chalk from "chalk";

// # Class-name icon
const icon = nf.icons['nf-md-weather_lightning']
console.log(`Weather: ${icon.char}`); // Weather: 󰖓

// # File icon (seti)
const file = 'example/index.js';
const ficon = nf.FSC.fromPath(file, nf.FSC.mappings.seti);
console.log(`Icon ${ficon.char} for ${file}`); // Icon  for example/index.js

// # Colored
const colorHex = ficon.color.toString(16)
const colorize = chalk.hex(colorHex)
console.log(`Icon ${colorize(ficon.char)} for ${file}`); // Icon  for example/index.js
```