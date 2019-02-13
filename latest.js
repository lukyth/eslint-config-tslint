// Based on https://github.com/palantir/tslint/blob/master/src/configs/latest.ts

module.exports = {
  extends: "tslint/recommended",
  plugins: ["@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",
  rules: {
    // align: {
    //   options: ["parameters", "statements", "members"],
    // },
    // Doesn't has any ESLint equivalent rule.

    // "no-invalid-template-strings": true,
    "no-template-curly-in-string": "error",

    // "no-sparse-arrays": true,
    "no-sparse-arrays": "error",

    // "no-object-literal-type-assertion": true,
    "@typescript-eslint/no-object-literal-type-assertion": "error",

    // "prefer-conditional-expression": true,
    // Doesn't has any ESLint equivalent rule.

    // "prefer-object-spread": true,
    "prefer-object-spread": "error",

    // "no-duplicate-variable": { options: "check-parameters" },
    "no-redeclare": "error",

    // "no-this-assignment": true,
    "@typescript-eslint/no-this-alias": "error",

    // "no-duplicate-imports": true,
    "import/no-duplicates": "error",

    // "space-within-parens": { options: 0 },
    "space-in-parens": "error",

    // "no-submodule-imports": true,
    "import/no-internal-modules": "error", // Slightly different

    // whitespace: {
    //   options: [
    //     "check-branch",
    //     "check-decl",
    //     "check-operator",
    //     "check-separator",
    //     "check-type",
    //     "check-typecast",
    //     "check-type-operator",
    //     "check-rest-spread"
    //   ]
    // },
    // Doesn't has any ESLint equivalent rule. Use Prettier instead.

    // "ban-comma-operator": true,
    "no-sequences": "error",

    // "jsdoc-format": { options: "check-multiline-start" },
    // "valid-jsdoc": "error", // TODO: Find a more equivalent rule.

    // "no-duplicate-switch-case": true,
    "no-duplicate-case": "error",

    // "no-implicit-dependencies": true,
    "import/no-extraneous-dependencies": "error",

    // "no-return-await": true,
    "no-return-await": "error",

    // "function-constructor": true,
    "no-new-func": "error",

    // "unnecessary-bind": true
    "no-extra-bind": "error"
  }
};
