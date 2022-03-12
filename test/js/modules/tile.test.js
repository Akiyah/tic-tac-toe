const Tile = require('../../../src/js/modules/tile');

describe('constructor', () => {
  test('no mark', () => {
    const tile = new Tile(1, 2);

    expect(tile.x).toBe(1);
    expect(tile.y).toBe(2);
    expect(tile.mark).toBe(" ");
  });

  test('with mark', () => {
    const tile = new Tile(1, 2, 'o');

    expect(tile.x).toBe(1);
    expect(tile.y).toBe(2);
    expect(tile.mark).toBe('o');
  });
});

test('#isBlank', () => {
  expect(new Tile(1, 2).isBlank()).toBeTruthy();
  expect(new Tile(1, 2, 'o').isBlank()).toBeFalsy();
  expect(new Tile(1, 2, 'x').isBlank()).toBeFalsy();
});
