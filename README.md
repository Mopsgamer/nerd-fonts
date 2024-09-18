# nf-util

[![npm version](https://badge.fury.io/js/nf-util.svg)](https://www.npmjs.com/package/nf-util)

Nerd Fonts mappings and utilities.

## Features

 - Get nf icon by css class name: 10K+ icons.
 - Get file icon by file name: give file path

## Install

```bash
npm i nf-util
```

## Usage

```js
import nf from "nf-util";

const file = 'example/index.js';
const icon = nf.getFileIcon(file, nf.mappings.seti);

console.log(`Icon ${icon} for ${file}`);
// Icon  for example/index.js
console.log(`Done. ${nf.icons['nf-md-weather_lightning'].char}`);
// Done. 󰖓
```