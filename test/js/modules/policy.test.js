const Policy = require('../../../src/js/modules/policy');


test('constructor', () => {
  const map = { key1: 'value1', key2: 'value2'};
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
  expect(policy.map[key1]).toEqual([
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9]
  ]);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(policy.map[key2]).toEqual([
    [1 / 7, 0, 1 / 7],
    [0, 1 / 7, 1 / 7],
    [1 / 7, 1 / 7, 1 / 7]
  ]);
});

