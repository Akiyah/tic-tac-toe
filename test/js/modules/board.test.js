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

test('#mapPoints', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  board = board.step(0, 1, 'x');
  const result = board.mapPoints((x, y) => [x, y]);
  expect(result).toEqual([
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]]
  ]);
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
  expect(board.key()).toEqual(
    "___" + "\n" +
    "x__" + "\n" +
    "_o_"
  );
});

test('#isBlank', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  board = board.step(0, 1, 'x');
  expect(board.isBlank(0, 0)).toBeTruthy();
  expect(board.isBlank(1, 2)).toBeFalsy();
  expect(board.isBlank(0, 1)).toBeFalsy();
});

test('#blankPoints', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  board = board.step(0, 1, 'x');
  expect(board.blankPoints()).toEqual([
    [0, 0], [1, 0], [2, 0],
            [1, 1], [2, 1],
    [0, 2],         [2, 2]
  ]);
});

test('#random', () => {
  let board = new Board();
  let results = [];
  for (let i = 0; i < 100; i++) {
    results.push(board.random(10));
  }
  expect(Math.min(...results)).toBe(0);
  expect(Math.max(...results)).toBe(9);
});

describe('#judgeWin', () => {
  test('no winners', () => {
    let board = new Board();
    expect(board.judgeWin('o')).toBeFalsy();
    expect(board.judgeWin('x')).toBeFalsy();
  });

  test('o win', () => {
    const board = new Board(
      [
        ["_", "o", "_"],
        ["x", "o", "x"],
        ["_", "o", "_"],
      ],
      1
    );
    expect(board.judgeWin('o')).toBeTruthy();
    expect(board.judgeWin('x')).toBeFalsy();
  });

  test('x win', () => {
    const board = new Board(
      [
        ["o", "_", "x"],
        ["_", "x", "_"],
        ["x", "o", "o"],
      ],
      1
    );
    expect(board.judgeWin('o')).toBeFalsy();
    expect(board.judgeWin('x')).toBeTruthy();
  });
});
