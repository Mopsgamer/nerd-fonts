# @m234/nerd-fonts

[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue.svg?style=flat)](https://www.jsdocs.io/package/@m234/nerd-fonts)
[![npm version](https://img.shields.io/npm/v/@m234/nerd-fonts.svg?style=flat)](https://www.npmjs.com/package/@m234/nerd-fonts)
[![npm downloads](https://img.shields.io/npm/dm/@m234/nerd-fonts.svg?style=flat)](https://www.npmjs.com/package/@m234/nerd-fonts)
[![github](https://img.shields.io/github/stars/Mopsgamer/nerd-fonts.svg?style=flat)](https://github.com/Mopsgamer/nerd-fonts)
[![github issues](https://img.shields.io/github/issues/Mopsgamer/nerd-fonts.svg?style=flat)](https://github.com/Mopsgamer/nerd-fonts/issues)

Gets Nerd Fonts glyph icons via a CSS class name or a file path with an extension.

## Features

- Nerd Fonts version: `3.4.0`.
- No dependencies.
- Built-in TypeScript declarations.
- Convert a Nerd Fonts CSS class to an icon: 10 764 icons.
- Convert a file path into a colored icon using the Seti preset or a custom callback.

## Install

```bash
npm i @m234/nerd-fonts
```

## Usage

Import:

```js
import * as nf from "@m234/nerd-fonts";
```

### Get by class name

Using `icons`:

```js
const icon = nf.icons['nf-md-weather_lightning']
console.log(`Weather: ${icon.value}`);
// >> Weather: 󰖓
```

Using `iconsMap`:

```js
const icon = nf.iconsMap.get('nf-md-weather_lightning')
console.log(`Weather: ${icon.value}`);
// >> Weather: 󰖓
```

### Get by file path

Using `fromPath` preset:

```js
const file = 'example/index.js';
const ficon = nf.fromPath(file, 'seti');
console.log(`Icon ${ficon.value} for ${file}`);
// >> Icon  for example/index.js
```

Using `fromPath` custom:

```js
const file = 'example/index.js';
const ficon = nf.fromPath(file, (base) => {
    if (base.endsWith('/'))
        return icons['nf-seti-folder']
    return nf.fromPath(base, 'seti')
});
console.log(`Icon ${ficon.value} for ${file}`);
// >> Icon  for example/index.js
```

Using [chalk](https://github.com/chalk/chalk):

```js
import chalk from "chalk";
const file = 'example/index.js';
const ficon = nf.fromPath(file, 'seti');
const colorize = chalk.hex(ficon.color)
console.log(`Icon ${colorize(ficon.value)} for ${file}`);
// >> Icon  for example/index.js
```

Using `%c`:

```js
const file = 'example/index.js';
const ficon = nf.fromPath(file, 'seti');
console.log(`Icon %c${ficon.value} for ${file}`, `color: ${ficon.color}`);
// >> Icon  for example/index.js
```

## See also

- https://jsr.io/@m234/path
