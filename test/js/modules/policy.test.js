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

test('#createValue', () => {
  const policy = Policy.createRandomPolicy();
  const value = policy.createValue();

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(value.map[key1]).toEqual(0.2838471428571429);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(value.map[key2]).toEqual(0.3202285714285716);

  const key3 =
    "_o_" + "\n" +
    "xox" + "\n" +
    "___";
  expect(value.map[key3]).toEqual(0.7790000000000001);

  const key4 =
    "_x_" + "\n" +
    "oo_" + "\n" +
    "___";
  expect(value.map[key4]).toEqual(-0.5176666666666667);
});

test('#updatePolicyOne', () => {
  const policyOld = Policy.createRandomPolicy();
  const policy = policyOld.updatePolicyOne();

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(policy.map[key1]).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(policy.map[key2]).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]);

  const key3 =
    "_o_" + "\n" +
    "xox" + "\n" +
    "___";
  expect(policy.map[key3]).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0]
  ]);

  const key4 =
    "_x_" + "\n" +
    "oo_" + "\n" +
    "___";
  expect(policy.map[key4]).toEqual([
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0]
  ]);
});

test('#updatePolicy', () => {
  const policyOld = Policy.createRandomPolicy();
  const policy = policyOld.updatePolicy();

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(policy.map[key1]).toEqual([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(policy.map[key2]).toEqual([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);

  const key3 =
    "_o_" + "\n" +
    "xox" + "\n" +
    "___";
  expect(policy.map[key3]).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0]
  ]);

  const key4 =
    "_x_" + "\n" +
    "oo_" + "\n" +
    "___";
  expect(policy.map[key4]).toEqual([
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0]
  ]);
});

describe('#delta', () => {
  const policy1 = Policy.createZeroPolicy();
  const policy2 = Policy.createZeroPolicy();

  expect(policy1.delta(policy2)).toEqual(0);

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  policy1.map[key1][1][2] = 1;
  expect(policy1.delta(policy2)).toEqual(1);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  policy1.map[key2][1][2] = -1;
  policy2.map[key2][1][2] = 1;
  expect(policy1.delta(policy2)).toEqual(2);
});
