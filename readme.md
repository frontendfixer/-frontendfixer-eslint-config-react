![Eslint Prettier TypeScript Setup from @frontendfixer](https://i.imgur.com/T1VMnQU.png)

# Eslint Prettier TypeScript Setup for **React** from _@frontendfixer_

## Table of contents

- [Eslint Prettier TypeScript Setup for **React** from _@frontendfixer_](#eslint-prettier-typescript-setup-for-react-from-frontendfixer)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [React config](#react-config)
    - [Typescript config](#typescript-config)
    - [Add script](#add-script)
  - [Settings](#settings)
    - [EsLint Rules](#eslint-rules)
    - [Prettier Rules](#prettier-rules)
  - [Auto fix lint error with VSCode](#auto-fix-lint-error-with-vscode)
  - [With Create React App](#with-create-react-app)
  - [With Gatsby](#with-gatsby)
  - [Inspirations](#inspirations)

---

## Features

- Lints JavaScript and TypeScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes React via eslint-config-airbnb
- Lints + Fixes Typescript via airbnb/typescript
- Lints + Fixes imports according to standard rules

You can see all the [base rules](https://github.com/frontendfixer/eslint-config-react/blob/main/rules/base.rules.js) and [typescript rule](https://github.com/frontendfixer/eslint-config-react/blob/main/rules/typescript.rules.js)

- You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Installation

- without typescript

```bash
npm install -D eslint prettier@^2.8.8 @frontendfixer/eslint-config-react
```

- with typescript

```bash
npm install -D eslint prettier@^2.8.8 typescript @frontendfixer/eslint-config-react
```

## Configuration

We need to put our eslint settings in a file in the root of our project. We should create a new `.eslintrc` or `.eslintrc.js` file that lives where `package.json` does:

### React config

You can add it in `package.json`, anywhere top level. Like right under your "scripts" object.

```json
"eslintConfig": {
  "extends": ["@frontendfixer/react"]
}
```

Or put this in a `.eslintrc` file

```json
{
  "extends": ["@frontendfixer/react"]
}
```

### Typescript config

```json
{
  "extends": ["@frontendfixer/react"],
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "extends": ["@frontendfixer/react/typescript"]
    }
  ]
}
```

TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) will do!

### Add script

You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "eslint --fix . --ext .js,.jsx,.ts,.tsx"
},
```

- Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Settings

### EsLint Rules

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
  "extends": [
    "@frontendfixer/react"
  ],
  "rules": {
    "no-console": "error",
  }
}
// You can also use {0, 1, 2} for {"off", "warn", "error"}
```

### Prettier Rules

By default these rules are enable for linting

```js
{
  semi: true,
  singleQuote: true,
}
```

If you want custom [prettier options](https://prettier.io/docs/en/options.html), it's recommended to create a `.prettierrc` file in your root directory like so:

```json
{
  "trailingComma": "es5",
  "printWidth": 80,
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "bracketSameLine": true,
  "jsxBracketSameLine": true,
  "jsxSingleQuote": false
}
```

- this `.prettierrc` file is present in config if you want different rules then create a new config

Note if you are switching to double quotes, you'll also need to add this eslint rule, or they will fight to the death!

```js
quotes: ['error', 'double'];
```

---

## Auto fix lint error with VSCode

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

---

## With Create React App

1. Run `npx install-peerdeps --dev @frontendfixer/eslint-config-react`
2. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "@frontendfixer/react"`

## With Gatsby

1. Run `npx install-peerdeps --dev @frontendfixer/eslint-config-react`
2. follow the [Local / Per Project Install](#configuration) steps above

## Inspirations

1. [eslint-config-standard](https://github.com/standard/eslint-config-standard)
2. [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos/)
