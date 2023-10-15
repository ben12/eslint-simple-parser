# eslint-simple-parser

[![GitHub](https://img.shields.io/github/license/ben12/eslint-simple-parser)](https://github.com/ben12/eslint-simple-parser/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@ben_12/eslint-simple-parser.svg)](https://www.npmjs.com/package/@ben_12/eslint-simple-parser)
[![Downloads/month](https://img.shields.io/npm/dm/@ben_12/eslint-simple-parser.svg)](http://www.npmtrends.com/@ben_12/eslint-simple-parser)\
[![node-current](https://img.shields.io/node/v/%40ben_12%2Feslint-simple-parser)](https://nodejs.org)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40ben_12%2Feslint-simple-parser)\
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ben12_eslint-simple-parser&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ben12_eslint-simple-parser)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=ben12_eslint-simple-parser&metric=code_smells)](https://sonarcloud.io/dashboard?id=ben12_eslint-simple-parser)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=ben12_eslint-simple-parser&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ben12_eslint-simple-parser)

Simple file line parser for [ESLint].

## 💿 Installation

Use [npm] or a compatible tool.

```
$ npm install -D eslint @ben_12/eslint-simple-parser
```

## 📖 Usage

Write your [ESLint] configuration:

```js
module.exports = {
  parser: "@ben_12/eslint-simple-parser"
};
```

## 📰 Changelog

See [GitHub Releases](https://github.com/ben12/eslint-simple-parser/releases).

## ❤️ Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` ... Run tests. It generates code coverage into `coverage` directory.
- `npm run watch` ... Run tests when files are edited.
- `npm version <patch|minor|major>` ... Bump a new version.

[ESLint]: https://eslint.org/
[npm]: https://www.npmjs.com/
