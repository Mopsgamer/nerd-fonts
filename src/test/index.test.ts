import assert from 'node:assert';
import {icons, collections, fromPath} from '../index.js';
import {it} from "node:test";

it('file.ts', () => {
	assert.strictEqual(fromPath('file.ts', collections.seti)?.value, icons['nf-seti-typescript'].value);
});

it('file.d.ts', () => {
	assert.strictEqual(fromPath('file.d.ts', collections.seti)?.value, icons['nf-seti-typescript'].value);
});

it('file', () => {
	assert.strictEqual(fromPath('file', collections.seti)?.value, icons['nf-seti-text'].value);
});

it('.gitignore', () => {
	assert.strictEqual(fromPath('.gitignore', collections.seti)?.value, icons['nf-seti-git_ignore'].value);
});

it('LICENSE', () => {
	assert.strictEqual(fromPath('LICENSE', collections.seti)?.value, icons['nf-seti-license'].value);
});

it('LICENSE.txt', () => {
	assert.strictEqual(fromPath('LICENSE.txt', collections.seti)?.value, icons['nf-seti-license'].value);
});
