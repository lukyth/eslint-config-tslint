// Based on https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts

module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // 'align': 'error', // Doesn't has any ESLint equivalent rule
    '@typescript-eslint/array-type': ['error', 'array-simple'],
    'arrow-parens': 'error',
    'arrow-body-style': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: 'Avoid using the `Object` type. Did you mean `object`?',
          Function:
            'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          Number: 'Avoid using the `Number` type. Did you mean `number`?',
          String: 'Avoid using the `String` type. Did you mean `string`?',
          Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
        },
      },
    ],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    'capitalized-comments': 'error',
    'spaced-comment': 'error',
    curly: 'error',
    complexity: 'off',
    'eol-last': 'error',
    'guard-for-in': 'error',
    // 'import-spacing': 'error', // Doesn't has any ESLint equivalent rule
    indent: 'off',
    '@typescript-eslint/indent': 'error',
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/prefer-interface': 'error',
    'valid-jsdoc': 'error', // TODO: Use eslint-plugin-jsdoc instead
    'no-unused-labels': 'error',
    'max-classes-per-file': ['error', 1],
    'max-len': ['error', { code: 120 }],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/member-ordering': 'error', // TODO: Make sure this has statics-first behavior
    'new-parens': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-caller': 'error',
    'no-bitwise': 'error',
    'no-cond-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-console': 'error',
    'no-new-wrappers': 'error',
    'no-debugger': 'error',
    'constructor-super': 'error',
    'no-empty': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    'no-eval': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    // 'no-reference-import': 'error', // Doesn't has any ESLint equivalent rule
    'no-shadow': 'error',
    'dot-notation': 'error',
    'no-throw-literal': 'error',
    'no-fallthrough': 'off',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expression': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-var': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'object-shorthand': 'error',
    'sort-keys': 'error',
    // 'one-line': 'error', // Doesn't has any ESLint equivalent rule
    'one-var': 'error',
    'prefer-arrow/prefer-arrow-functions': 'error', // TODO: Probably not equivalent to TSLint's `only-arrow-functions`
    'import/order': 'error', // TODO: Probably not equivalent to TSLint's `ordered-imports`
    'prefer-const': 'error',
    // 'prefer-for-of': 'error', // Doesn't has any ESLint equivalent rule
    quotes: ['error', 'double', { avoidEscape: true }],
    radix: 'error',
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // typedef: 'off', // Doesn't has any ESLint equivalent rule
    '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
    'typeof-compare': 'off',
    // 'unified-signatures': 'error', // Doesn't has any ESLint equivalent rule
    'use-isnan': 'error',
    camelcase: ['error', { allow: ['^([A-Z0-9]|[A-Z0-9]+[a-z0-9]+(?:[A-Z0-9]+[a-z0-9]*)*)$'] }], // PascalCase RegEx ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/rules/jsx-pascal-case.js#L16
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    // whitespace: 'error', // Doesn't has any ESLint equivalent rule
  },
}
