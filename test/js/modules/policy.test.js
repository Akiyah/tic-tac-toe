const Policy = require('../../../src/js/modules/policy');
const Value = require('../../../src/js/modules/value');

test('constructor', () => {
  const map = { key1: 'value1', key2: 'value2' };
  const policy = new Policy(map);
  expect(policy.map).toBe(map);
});

test('.createZeroPolicy', () => {
  const policy = Policy.createZeroPolicy();
  expect(Object.keys(policy.map).length).toBe(765);

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(policy.map[key1]).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(policy.map[key2]).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
});

test('.createRandomPolicy', () => {
  const policy = Policy.createRandomPolicy();
  expect(Object.keys(policy.map).length).toBe(765);

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  const a = 1 / 9;
  expect(policy.map[key1]).toEqual([
    [a, a, a],
    [a, a, a],
    [a, a, a]
  ]);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  const b = 1 / 7;
  expect(policy.map[key2]).toEqual([
    [b, 0, b],
    [0, b, b],
    [b, b, b]
  ]);
});

test('#updateValueOnce', () => {
  const policy = Policy.createRandomPolicy();
  const oldValue = Value.createZeroValue();
  const value = policy.updateValueOnce(oldValue);

  expect(value.delta(oldValue)).toBe(1);

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(value.map[key1]).toBe(0);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(value.map[key2]).toBe(0);

  const key3 =
    "_o_" + "\n" +
    "xox" + "\n" +
    "___";
  expect(value.map[key3]).toEqual(expect.closeTo(1 / 5, 5));

  const key4 =
    "_x_" + "\n" +
    "oo_" + "\n" +
    "___";
  // x:[2, 1](1パターン) -> 決着がつかない
  // x:[2, 1]以外(5パターン) -> o:[2, 1]以外(4パターン) -> 決着がつかない
  // x:[2, 1]以外(5パターン) -> o:[2, 1](1パターン) -> o win
  expect(value.map[key4]).toEqual(expect.closeTo(5 / 6 * 1 / 5 * -1, 5));
});

test('#updateValue', () => {
  const policy = Policy.createRandomPolicy();
  const value = policy.updateValue();

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(value.map[key1]).toEqual(0.4238095238095234);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(value.map[key2]).toEqual(0.4285714285714286);

  const key3 =
    "_o_" + "\n" +
    "xox" + "\n" +
    "___";
  expect(value.map[key3]).toEqual(0.8666666666666667);

  const key4 =
    "_x_" + "\n" +
    "oo_" + "\n" +
    "___";
  expect(value.map[key4]).toEqual(-0.5666666666666667);
});

