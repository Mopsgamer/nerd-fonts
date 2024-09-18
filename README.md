# @m234/nerd-fonts

[![npm version](https://badge.fury.io/js/@m234%2Fnerd-fonts.svg)](https://www.npmjs.com/package/@m234/nerd-fonts)

Nerd Fonts mappings and utilities.

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

console.log(`Weather: ${nf.icons['nf-md-weather_lightning'].char}`);
// Weather: 󰖓
```

```js
import nf from "@m234/nerd-fonts";

const file = 'example/index.js';
const icon = nf.FSC.fromPath(file, nf.FSC.mappings.seti);

console.log(`Icon ${icon.char} for ${file}`);
// Icon  for example/index.js
console.log(`Done. ${nf.icons['nf-md-weather_lightning'].char}`);
// Done. 󰖓
```

Colored
```js
import nf from "@m234/nerd-fonts";
import chalk from "chalk";

const file = 'example/index.js';
const icon = nf.FSC.fromPath(file, nf.FSC.mappings.seti);

const colorHex = icon.color.toString(16) ?? '#ffffff'
console.log(`Icon ${chalk.hex(colorHex)(icon.char)} for ${file}`);
// Icon  for example/index.js
```