# @m234/nerd-fonts

[![npm version](https://img.shields.io/npm/v/@m234/nerd-fonts.svg?style=flat)](https://www.npmjs.com/package/@m234/nerd-fonts)
[![npm downloads](https://img.shields.io/npm/dm/@m234/nerd-fonts.svg?style=flat)](https://www.npmjs.com/package/@m234/nerd-fonts)
[![github](https://img.shields.io/github/stars/Mopsgamer/nerd-fonts.svg?style=flat
)](https://github.com/Mopsgamer/nerd-fonts)
[![github issues](https://img.shields.io/github/issues/Mopsgamer/nerd-fonts.svg?style=flat)](https://github.com/Mopsgamer/nerd-fonts/issues)

Get Nerd Fonts glyph icon character using a CSS class name or a file path with an extension.

## Features

 - Get Nerd Fonts icons by css class names: 10K+ icons.
 - Give a file path or a parsed object - get icon. Seti theme support with colors.
 - Built-in typescript declarations.
 - NF meta and version included.
 - Submodule exports.

## Install

```bash
npm i @m234/nerd-fonts
```

## Usage

Import:
```js
import * as nf from "@m234/nerd-fonts";
```

Get an icon by class name:
```js
const icon = nf.icons['nf-md-weather_lightning']
console.log(`Weather: ${icon.value}`);
// >> Weather: 󰖓
```

Get an icon by file path:
```js
const file = 'example/index.js';
const ficon = nf.fromPath(file, 'seti');
console.log(`Icon ${ficon.value} for ${file}`);
// >> Icon  for example/index.js
```

Colors:
```js
import chalk from "chalk";
const file = 'example/index.js';
const ficon = nf.fromPath(file, 'seti');
const colorize = chalk.hex(ficon.color)
console.log(`Icon ${colorize(ficon.value)} for ${file}`);
// >> Icon  for example/index.js
```
