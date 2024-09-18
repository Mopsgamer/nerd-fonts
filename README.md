# nf-util

[![npm version](https://badge.fury.io/js/nf-util.svg)](https://www.npmjs.com/package/nf-util)

Nerd Fonts mappings and utilities.

## Roadmap

 - [ ] Get a glyph by name.
    - [ ] Powerline Symbols: 7 icons.
    - [ ] Powerline Extra Symbols: 33 icons.
    - [ ] Font Awesome: 1474 icons.
    - [ ] Font Awesome Extension: 170 icons.
    - [ ] Devicons: 198 icons.
    - [ ] Weather Icons: 228 icons.
    - [x] Seti UI + Custom: 188 icons.
    - [ ] Octicons: 310 icons.
    - [ ] Font Logos: 118 icons.
    - [ ] IEC Power Symbols: 5 icons.
    - [ ] Pomicons: 11 icons.
    - [ ] Material Design: 6,896 icons.
    - [ ] Codicons: 439 icons.
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