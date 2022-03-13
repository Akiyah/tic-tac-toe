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

test('#step', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  expect(board.tiles).toEqual([
    [new Tile(0, 0), new Tile(1, 0), new Tile(2, 0)],
    [new Tile(0, 1), new Tile(1, 1), new Tile(2, 1)],
    [new Tile(0, 2), new Tile(1, 2, 'o'), new Tile(2, 2)],
  ]);

  board = board.step(0, 1, 'x');
  expect(board.tiles).toEqual([
    [new Tile(0, 0), new Tile(1, 0), new Tile(2, 0)],
    [new Tile(0, 1, 'x'), new Tile(1, 1), new Tile(2, 1)],
    [new Tile(0, 2), new Tile(1, 2, 'o'), new Tile(2, 2)],
  ]);
});

test('#key', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  board = board.step(0, 1, 'x');
  expect(board.key()).toEqual("   \nx  \n o ");
});
