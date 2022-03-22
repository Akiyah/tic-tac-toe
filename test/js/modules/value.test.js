const Value = require('../../../src/js/modules/value');


test('constructor', () => {
  const map = { key1: 'value1', key2: 'value2' };
  const value = new Value(map);
  expect(value.map).toBe(map);
});

test('.createRandomPolicy', () => {
  const value = Value.createZeroValue();
  expect(Object.keys(value.map).length).toBe(765);

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  expect(value.map[key1]).toEqual(0);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  expect(value.map[key2]).toEqual(0);
});

describe('#delta', () => {
  const value1 = Value.createZeroValue();
  const value2 = Value.createZeroValue();

  expect(value1.delta(value2)).toEqual(0);

  const key1 =
    "___" + "\n" +
    "___" + "\n" +
    "___";
  value1.map[key1] = 1;
  value2.map[key1] = 0;

  expect(value1.delta(value2)).toEqual(1);

  const key2 =
    "_x_" + "\n" +
    "o__" + "\n" +
    "___";
  value1.map[key2] = -1;
  value2.map[key2] = 2;

  expect(value1.delta(value2)).toEqual(3);
});

