/// <reference types="./types/eslint.config.d.ts" />

import cSpellPlugin from '@cspell/eslint-plugin';
import eslintJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfigs from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export default defineFlatConfig([
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  {
    files: ['**/*.{,c,m}js', '**/*.{,c,m}ts'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      '@cspell': cSpellPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      globals: { ...globals.node },
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...tsPlugin.configs['strict-type-checked'].rules,
      ...tsPlugin.configs['stylistic-type-checked'].rules,
      ...prettierConfigs.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...cSpellPlugin.configs.recommended.rules,
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@cspell/spellchecker': [
        'warn',
        {
          checkComments: true,
          numSuggestions: 3,
          customWordListFile: resolve(dirname(fileURLToPath(import.meta.url)), 'cspell.config.yaml'),
        },
      ],
    },
  },
]);
