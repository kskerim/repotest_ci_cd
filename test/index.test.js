import { test } from "node:test";
import assert from "node:assert/strict";
import { moyenne, mention } from "../src/index.js";

test("moyenne de plusieurs notes", () => {
  assert.equal(moyenne([10, 12, 14]), 12);
});

test("moyenne arrondie au centième", () => {
  assert.equal(moyenne([10, 11, 11]), 10.67);
});

test("refuse une liste vide", () => {
  assert.throws(() => moyenne([]));
});

test("refuse une note hors de 0 à 20", () => {
  assert.throws(() => moyenne([12, 25]));
});

test("mention selon la moyenne", () => {
  assert.equal(mention(17), "très bien");
  assert.equal(mention(14), "bien");
  assert.equal(mention(12.5), "assez bien");
  assert.equal(mention(10), "passable");
  assert.equal(mention(8), "ajourné");
});
