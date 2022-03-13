const Board = require('../../../src/js/modules/board');

describe('constructor', () => {
  test('no params', () => {
    const board = new Board();

    expect(board.marks).toEqual([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"]
    ]);
    expect(board.k).toEqual(0);
  });

  test('with params', () => {
    const board = new Board(
      [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "o", "_"],
      ],
      1
    );

    expect(board.marks).toEqual([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "o", "_"]
    ]);
    expect(board.k).toEqual(1);
  });
});

test('#step', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  expect(board.marks).toEqual([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "o", "_"]
  ]);
  expect(board.k).toEqual(1);

  board = board.step(0, 1, 'x');
  expect(board.marks).toEqual([
    ["_", "_", "_"],
    ["x", "_", "_"],
    ["_", "o", "_"]
  ]);
  expect(board.k).toEqual(2);
});

test('#key', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  board = board.step(0, 1, 'x');
  console.log(board.key());
  expect(board.key()).toEqual(
    "___" + "\n" +
    "x__" + "\n" +
    "_o_"
  );
});
