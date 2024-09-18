# nf-util

[![npm version](https://badge.fury.io/js/nf-util.svg)](https://www.npmjs.com/package/nf-util)

Nerd Fonts mappings and utilities.

## Roadmap

 - [x] Get a glyph by name: 10417 icons.
 - [ ] Get a file icon by the file name (Seti).
     - [x] Characters.
     - [ ] Colors.

## Install

```bash
npm i nf-util
```

## Usage

```js
import nf from "nf-util";

const file = 'example/index.js';
const icon = nf.fileIcon(file);

console.log(`${icon} ${file}`);
//  example/index.js
```