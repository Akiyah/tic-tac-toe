const KEYS = require('../../../src/js/modules/keys');

test('length', () => {
  expect(KEYS.length).toBe(10);
  expect(KEYS[0].length).toBe(1);
  expect(KEYS[1].length).toBe(3);
  expect(KEYS[2].length).toBe(12);
  expect(KEYS[3].length).toBe(38);
  expect(KEYS[4].length).toBe(108);
  expect(KEYS[5].length).toBe(174);
  expect(KEYS[6].length).toBe(204);
  expect(KEYS[7].length).toBe(153);
  expect(KEYS[8].length).toBe(57);
  expect(KEYS[9].length).toBe(15);
});
