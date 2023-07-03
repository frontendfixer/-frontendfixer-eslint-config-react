const fs = require('node:fs');
const path = require('node:path');
const { ESLint } = require('eslint');

describe('Configuration files', () => {
  const file = path.resolve(__dirname, 'test-input.js');

  afterAll(() => {
    fs.unlinkSync(file);
  });

  it('uses custom rules correctly', async () => {
    fs.writeFileSync(file, '[ {}]');

    const eslint = new ESLint({
      useEslintrc: false,
      baseConfig: {
        plugins: ['@onefinity/custom-rules'],
        rules: {
          '@onefinity/custom-rules/consistent-array-of-objects-notation': 'error',
        },
      },
    });
    const results = await eslint.lintFiles(file);

    expect(results).toHaveLength(1);
    expect(results[0].messages).toEqual([
      expect.objectContaining({
        ruleId: '@onefinity/custom-rules/consistent-array-of-objects-notation',
        message:
          'There should be no whitespace between the opening bracket of an array and the opening brace of its first object',
      }),
    ]);
  });

  it.each(['esnext.js', 'node.js', 'react.js', 'typescript.js'])('validate %s', async (filename) => {
    fs.writeFileSync(file, '');

    const eslint = new ESLint({
      useEslintrc: false,
      baseConfig: {
        parserOptions: {
          requireConfigFile: false,
          project: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
      overrideConfigFile: path.resolve(__dirname, filename),
    });
    const results = await eslint.lintFiles(file);

    expect(results).toHaveLength(1);
    expect(results[0].messages).toHaveLength(0);
  });
});
