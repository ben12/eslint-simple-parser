import { assert } from "chai";
import { describe, it } from "mocha";
import { parseForESLint } from "../lib";

describe("@ben_12/eslint-simple-parser", () => {
  it("Should parse lines", () => {
    const result = parseForESLint(`Ligne 1
Ligne 2
Ligne 3

`);

    assert.deepEqual(result, {
      ast: {
        body: [],
        comments: [],
        range: [0, 25],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 4, column: 0 },
        },
        tokens: [{
          type: "String",
          value: "Ligne 1\n",
          range: [0, 8],
          loc: {
            start: { line: 1, column: 0 },
            end: { line: 1, column: 7 },
          },
        }, {
          type: "String",
          value: "Ligne 2\n",
          range: [8, 16],
          loc: {
            start: { line: 2, column: 0 },
            end: { line: 2, column: 7 },
          },
        }, {
          type: "String",
          value: "Ligne 3\n",
          range: [16, 24],
          loc: {
            start: { line: 3, column: 0 },
            end: { line: 3, column: 7 },
          },
        }, {
          type: "String",
          value: "\n",
          range: [24, 25],
          loc: {
            start: { line: 4, column: 0 },
            end: { line: 4, column: 0 },
          },
        }],
        type: "Program",
        sourceType: "script",
      },
    });
  });

  it("Should parse single line file", () => {
    const result = parseForESLint("Single line");

    assert.deepEqual(result, {
      ast: {
        body: [],
        comments: [],
        range: [0, 11],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 10 },
        },
        tokens: [{
          type: "String",
          value: "Single line",
          range: [0, 11],
          loc: {
            start: { line: 1, column: 0 },
            end: { line: 1, column: 10 },
          },
        }],
        type: "Program",
        sourceType: "script",
      },
    });
  });

  it("Should parse empty file", () => {
    const result = parseForESLint("");

    assert.deepEqual(result, {
      ast: {
        body: [],
        comments: [],
        range: [0, 0],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 0 },
        },
        tokens: [],
        type: "Program",
        sourceType: "script",
      },
    });
  });
});
