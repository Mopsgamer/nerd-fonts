# @m234/nf

[![npm version](https://badge.fury.io/js/@m234/nf.svg)](https://www.npmjs.com/package/@m234/nf)

Nerd Fonts mappings and utilities.

## Features

 - Get Nerd Fonts icons by css class names: 10K+ icons.
 - Give a file path or a parsed object - get icon. Seti theme support with colors.
 - Built-in typescript declarations.

## Install

```bash
npm i @m234/nf
```

## Usage

```js
import nf from "@m234/nf";

console.log(`Weather: ${nf.icons['nf-md-weather_lightning'].char}`);
// Weather: 󰖓
```

```js
import nf from "@m234/nf";

const file = 'example/index.js';
const icon = nf.FSC.fromPath(file, nf.FSC.mappings.seti);

console.log(`Icon ${icon.char} for ${file}`);
// Icon  for example/index.js
console.log(`Done. ${nf.icons['nf-md-weather_lightning'].char}`);
// Done. 󰖓
```

Colored
```js
import nf from "@m234/nf";
import chalk from "chalk";

const file = 'example/index.js';
const icon = nf.FSC.fromPath(file, nf.FSC.mappings.seti);

const colorHex = icon.color.toString(16) ?? '#ffffff'
console.log(`Icon ${chalk.hex(colorHex)(icon.char)} for ${file}`);
// Icon  for example/index.js
```