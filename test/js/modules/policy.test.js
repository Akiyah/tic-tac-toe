const Policy = require('../../../src/js/modules/policy');


test('constructor', () => {
  const map = { key1: 'value1', key2: 'value2' };
  const policy = new Policy(map);
  expect(policy.map).toBe(map);
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

