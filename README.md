# nf-util

[![npm version](https://badge.fury.io/js/nf-util.svg)](https://www.npmjs.com/package/nf-util)

Nerd Fonts mappings and utilities.

## Features

 - [ ] Get a glyph by name.
 - [ ] Get a file icon by the file name.

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