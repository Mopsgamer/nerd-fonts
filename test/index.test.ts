import assert from 'node:assert';
import {fromPath, mappings} from '../src/file-icons.js';
import icons from '../src/icons.js';

it('file.ts', () => {
	assert.strictEqual(fromPath('file.ts', mappings.seti).char, icons['nf-seti-typescript'].char);
});

it('file.d.ts', () => {
	assert.strictEqual(fromPath('file.d.ts', mappings.seti).char, icons['nf-seti-typescript'].char);
});

it('file', () => {
	assert.strictEqual(fromPath('file', mappings.seti).char, icons['nf-seti-text'].char);
});

it('.gitignore', () => {
	assert.strictEqual(fromPath('.gitignore', mappings.seti).char, icons['nf-seti-git_ignore'].char);
});

it('LICENSE', () => {
	assert.strictEqual(fromPath('LICENSE', mappings.seti).char, icons['nf-seti-license'].char);
});

it('LICENSE.txt', () => {
	assert.strictEqual(fromPath('LICENSE.txt', mappings.seti).char, icons['nf-seti-license'].char);
});
