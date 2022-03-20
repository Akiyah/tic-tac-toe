const Counter = require('../../../src/js/modules/counter');

test('#count', () => {
  const counter = new Counter();
  const keys = counter.count();

  expect(keys.length).toBe(10);
  expect(keys[0].length).toBe(1);
  expect(keys[1].length).toBe(9);
  expect(keys[2].length).toBe(72);
  expect(keys[3].length).toBe(252);
  expect(keys[4].length).toBe(756);
  expect(keys[5].length).toBe(1260);
  expect(keys[6].length).toBe(1520);
  expect(keys[7].length).toBe(1140);
  expect(keys[8].length).toBe(390);
  expect(keys[9].length).toBe(78);
});

test('#countNormalize', () => {
  const counter = new Counter();
  const keys = counter.countNormalize();

  expect(keys.length).toBe(10);
  expect(keys[0].length).toBe(1);
  expect(keys[1].length).toBe(3);
  expect(keys[2].length).toBe(12);
  expect(keys[3].length).toBe(38);
  expect(keys[4].length).toBe(108);
  expect(keys[5].length).toBe(174);
  expect(keys[6].length).toBe(204);
  expect(keys[7].length).toBe(153);
  expect(keys[8].length).toBe(57);
  expect(keys[9].length).toBe(15);
});
