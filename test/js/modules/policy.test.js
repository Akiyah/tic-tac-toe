const Policy = require('../../../src/js/modules/policy');

describe('constructor', () => {
  test('no params', () => {
    const policy = new Policy();
    expect(Array.from(policy.map).length).toBe(765);

    const key1 =
      "___" + "\n" +
      "___" + "\n" +
      "___";
    expect(policy.map.get(key1)).toEqual([
      [1 / 9, 1 / 9, 1 / 9],
      [1 / 9, 1 / 9, 1 / 9],
      [1 / 9, 1 / 9, 1 / 9]
    ]);

    const key2 =
      "_x_" + "\n" +
      "o__" + "\n" +
      "___";
    expect(policy.map.get(key2)).toEqual([
      [1 / 7, 0, 1 / 7],
      [0, 1 / 7, 1 / 7],
      [1 / 7, 1 / 7, 1 / 7]
    ]);
  });
});

