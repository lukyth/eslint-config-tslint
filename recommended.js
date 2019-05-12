// Based on https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts

module.exports = {
  plugins: ["@typescript-eslint", "import", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  rules: {
    // "adjacent-overload-signatures": true,
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // align: {
    //   options: ["parameters", "statements"]
    // },
    // Doesn't has any ESLint equivalent rule.

    // "array-type": {
    //   options: ["array-simple"]
    // },
    "@typescript-eslint/array-type": ["error", "array-simple"],

    // "arrow-parens": true,
    "arrow-parens": "error",

    // "arrow-return-shorthand": true,
    "arrow-body-style": "error",

    // "ban-types": {
    //   options: [
    //     ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
    //     [
    //       "Function",
    //       "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
    //     ],
    //     ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
    //     ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
    //     ["String", "Avoid using the `String` type. Did you mean `string`?"],
    //     ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
    //   ]
    // },
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: "Avoid using the `Object` type. Did you mean `object`?",
          Function:
            "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          Boolean: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          Number: "Avoid using the `Number` type. Did you mean `number`?",
          String: "Avoid using the `String` type. Did you mean `string`?",
          Symbol: "Avoid using the `Symbol` type. Did you mean `symbol`?"
        }
      }
    ],

    // "callable-types": true,
    // "@typescript-eslint/prefer-function-type": "error", // TODO: Uncomment this once @typescript-eslint/eslint-plugin release a new version with this rule.

    // "class-name": true,
    "@typescript-eslint/class-name-casing": "error",

    // "comment-format": {
    //   options: ["check-space"]
    // },
    "spaced-comment": "error",

    // curly: true,
    curly: "error",

    // "cyclomatic-complexity": false,
    complexity: "off",

    // eofline: true,
    "eol-last": "error",

    // forin: true,
    "guard-for-in": "error",

    // "import-spacing": true,
    // Doesn't has any ESLint equivalent rule

    // indent: {
    //   options: ["spaces"]
    // },
    indent: "off",
    "@typescript-eslint/indent": "error",

    // "interface-name": {
    //   options: ["always-prefix"]
    // },
    "@typescript-eslint/interface-name-prefix": ["error", "always"],

    // "interface-over-type-literal": true,
    "@typescript-eslint/prefer-interface": "error",

    // "jsdoc-format": true,
    // "valid-jsdoc": "error", // TODO: Find a more equivalent rule.

    // "label-position": true,
    "no-unused-labels": "error",

    // "max-classes-per-file": { options: 1 },
    "max-classes-per-file": ["error", 1],

    // "max-line-length": { options: 120 },
    "max-len": ["error", { code: 120 }],

    // "member-access": true,
    "@typescript-eslint/explicit-member-accessibility": "error",

    // "member-ordering": {
    //   options: {
    //     order: "statics-first"
    //   }
    // },
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          // Order from https://github.com/palantir/tslint/blob/master/src/rules/memberOrderingRule.ts#L84
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],

    // "new-parens": true,
    "new-parens": "error",

    // "no-angle-bracket-type-assertion": true,
    "@typescript-eslint/no-angle-bracket-type-assertion": "error",

    // "no-any": false,
    "@typescript-eslint/no-explicit-any": "off",

    // "no-arg": true,
    "no-caller": "error",

    // "no-bitwise": true,
    "no-bitwise": "error",

    // "no-conditional-assignment": true,
    "no-cond-assign": "error",

    // "no-consecutive-blank-lines": true,
    "no-multiple-empty-lines": "error",

    // "no-console": true,
    "no-console": "error",

    // "no-construct": true,
    "no-new-wrappers": "error",

    // "no-debugger": true,
    "no-debugger": "error",

    // "no-duplicate-super": true,
    "constructor-super": "error",

    // "no-empty": true,
    "no-empty": "error",

    // "no-empty-interface": true,
    "@typescript-eslint/no-empty-interface": "error",

    // "no-eval": true,
    "no-eval": "error",

    // "no-internal-module": true,
    "@typescript-eslint/prefer-namespace-keyword": "error",

    // "no-invalid-this": false,
    "no-invalid-this": "off",

    // "no-misused-new": true,
    "@typescript-eslint/no-misused-new": "error",

    // "no-namespace": true,
    "@typescript-eslint/no-namespace": "error",

    // "no-parameter-properties": false,
    "@typescript-eslint/no-parameter-properties": "off",

    // "no-reference": true,
    "@typescript-eslint/no-triple-slash-reference": "error",

    // "no-reference-import": true,
    // Doesn't has any ESLint equivalent rule.

    // "no-shadowed-variable": true,
    "no-shadow": "error",

    // "no-string-literal": true,
    "dot-notation": "error",

    // "no-string-throw": true,
    "no-throw-literal": "error",

    // "no-switch-case-fall-through": false,
    "no-fallthrough": "off",

    // "no-trailing-whitespace": true,
    "no-trailing-spaces": "error",

    // "no-unnecessary-initializer": true,
    "no-undef-init": "error",

    // "no-unsafe-finally": true,
    "no-unsafe-finally": "error",

    // "no-unused-expression": true,
    "no-unused-expressions": ["error", { allowShortCircuit: true }],

    // "no-use-before-declare": false, // disabled because it is very heavy performance-wise and not that useful
    "@typescript-eslint/no-use-before-define": "off",

    // "no-var-keyword": true,
    "no-var": "error",

    // "no-var-requires": true,
    "@typescript-eslint/no-var-requires": "error",

    // "object-literal-key-quotes": { options: "consistent-as-needed" },
    "quote-props": ["error", "consistent-as-needed"],

    // "object-literal-shorthand": true,
    "object-shorthand": "error",

    // "object-literal-sort-keys": true,
    "sort-keys": "error",

    // "one-line": {
    //   options: [
    //     "check-catch",
    //     "check-else",
    //     "check-finally",
    //     "check-open-brace",
    //     "check-whitespace"
    //   ]
    // },
    // Doesn't has any ESLint equivalent rule.

    // "one-variable-per-declaration": { options: ["ignore-for-loop"] },
    "one-var": ["error", "never"],

    // "only-arrow-functions": {
    //   options: ["allow-declarations", "allow-named-functions"]
    // },
    // "prefer-arrow/prefer-arrow-functions": "error", // TODO: Find a more equivalent rule.

    // "ordered-imports": {
    //   options: {
    //     "import-sources-order": "case-insensitive",
    //     "module-source-path": "full",
    //     "named-imports-order": "case-insensitive"
    //   }
    // },
    "sort-imports": "off", // Make sure other import sorting rules are disbled and only `simple-import-sort/sort` is enabled.
    "import/order": "off",
    "simple-import-sort/sort": "error",

    // "prefer-const": true,
    "prefer-const": "error",

    // "prefer-for-of": true,
    // Doesn't has any ESLint equivalent rule.

    // quotemark: {
    //   options: ["double", "avoid-escape"]
    // },
    quotes: ["error", "double", { avoidEscape: true }],

    // radix: true,
    radix: "error",

    // semicolon: { options: ["always"] },
    semi: ["error", "always"],

    // "space-before-function-paren": {
    //   options: {
    //     anonymous: "never",
    //     asyncArrow: "always",
    //     constructor: "never",
    //     method: "never",
    //     named: "never"
    //   }
    // },
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        asyncArrow: "always",
        named: "never"
      }
    ],

    // "trailing-comma": {
    //   options: {
    //     esSpecCompliant: true,
    //     multiline: "always",
    //     singleline: "never"
    //   }
    // },
    "comma-dangle": ["error", "always-multiline"],

    // "triple-equals": { options: ["allow-null-check"] },
    eqeqeq: ["error", "always", { null: "ignore" }],

    // typedef: false,
    // Doesn't has any ESLint equivalent rule.

    // "typedef-whitespace": {
    //   options: [
    //     {
    //       "call-signature": "nospace",
    //       "index-signature": "nospace",
    //       parameter: "nospace",
    //       "property-declaration": "nospace",
    //       "variable-declaration": "nospace"
    //     },
    //     {
    //       "call-signature": "onespace",
    //       "index-signature": "onespace",
    //       parameter: "onespace",
    //       "property-declaration": "onespace",
    //       "variable-declaration": "onespace"
    //     }
    //   ]
    // },
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      { before: false, after: true }
    ],

    // "typeof-compare": false, // deprecated in TSLint 5.9.0
    "typeof-compare": "off",

    // "unified-signatures": true,
    // Doesn't has any ESLint equivalent rule.

    // "use-isnan": true,
    "use-isnan": "error",

    // "variable-name": {
    //   options: ["ban-keywords", "check-format", "allow-pascal-case"]
    // },
    '@typescript-eslint/camelcase': [
      "error",
      { allow: ["^([A-Z0-9]|[A-Z0-9]+[a-z0-9]+(?:[A-Z0-9]+[a-z0-9]*)*)$"] } // PascalCase RegEx ref: https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/rules/jsx-pascal-case.js#L16
    ],
    "id-blacklist": [
      // Keywords from https://github.com/palantir/tslint/blob/master/src/rules/variableNameRule.ts#L26
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined"
      // "undefined" // Can assign `undefined` to a variable.
    ]

    // whitespace: {
    //   options: [
    //     "check-branch",
    //     "check-decl",
    //     "check-operator",
    //     "check-separator",
    //     "check-type",
    //     "check-typecast"
    //   ]
    // },
    // Doesn't has any ESLint equivalent rule.
  }
};
