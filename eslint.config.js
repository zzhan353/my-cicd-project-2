// eslint.config.js
import globals from 'globals';
import js from '@eslint/js';
import jest from 'eslint-plugin-jest';

export default [
  {
    ignores: ["node_modules/"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: js.configs.recommended.rules,
  },
  {
    files: ['**/*.test.js'],
    ...jest.configs['flat/recommended'],
  }
];