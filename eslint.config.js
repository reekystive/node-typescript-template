import eslintJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfigs from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

/** @type {import('eslint').ESLint.ConfigData} */
const prettierPluginRecommendedConfig = /** @type {any} */ (prettierPlugin.configs).recommended;

export default defineFlatConfig([
  {
    files: ['src/**/*.ts'],
    plugins: {
      '@typescript-eslint': /** @type {any} */ (tsPlugin),
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.node },
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...prettierConfigs.rules,
      ...prettierPluginRecommendedConfig.rules,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
