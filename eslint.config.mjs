import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  stylistic.configs.recommended,
  tseslint.configs.recommended,
  { ignores: ['out/'] },
  {
    rules: {
      '@stylistic/indent': ['error', 2],
    },
    languageOptions: {
      globals: { ...globals['shared-node-browser'] },
    },
  },
)
