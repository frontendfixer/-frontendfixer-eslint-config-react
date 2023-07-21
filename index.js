require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    // node: true,
    commonjs: true,
    es6: true,
    jquery: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './rules/base.rules',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'airbnb',
    'stylelint',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'html',
    'import',
    'prettier',
    'react',
    'react-hooks',
    'simple-import-sort',
  ],
  ignorePatterns: ['node_modules/'],
};
