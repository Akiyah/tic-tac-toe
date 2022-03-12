const Board = require('../../../src/js/modules/board');
const Tile = require('../../../src/js/modules/tile');

test('constructor', () => {
  const board = new Board();

  expect(board.tiles).toEqual([
    [new Tile(0, 0), new Tile(1, 0), new Tile(2, 0)],
    [new Tile(0, 1), new Tile(1, 1), new Tile(2, 1)],
    [new Tile(0, 2), new Tile(1, 2), new Tile(2, 2)],
  ]);
});

