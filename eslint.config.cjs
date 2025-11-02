const globals = require("globals");
const js = require("@eslint/js");

/**
 * ESLint configuration (CommonJS format)
 * - Enforces recommended JS rules
 * - Adds code complexity checks
 */
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Enforce cyclomatic complexity threshold
      complexity: ["error", { max: 5 }],
    },
  },
];
