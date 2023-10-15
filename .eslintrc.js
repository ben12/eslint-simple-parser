"use strict"

module.exports = {
    root: true,
    ignorePatterns: [".eslintrc.js", "/.nyc_output", "/coverage", "/dist"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@ben_12/dprint/recommended",
    ],
    env: {
        node: true,
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
    }
}
