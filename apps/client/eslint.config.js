import { clientConfig } from '@repo/eslint-config/client';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'eslint.config.js'],
  },

  ...clientConfig,
];
