const Board = require('../../../src/js/modules/board');

describe('constructor', () => {
  test('no params', () => {
    const board = new Board();

    expect(board.marks).toEqual([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"]
    ]);
  });

  test('with params', () => {
    const board = new Board([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "o", "_"]
    ]);

    expect(board.marks).toEqual([
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "o", "_"]
    ]);
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

test('#mark', () => {
  const board = new Board([
    ["_", "_", "_"],
    ["x", "_", "_"],
    ["_", "o", "_"]
  ]);
  expect(board.mark(0, 0)).toEqual("_");
  expect(board.mark(1, 2)).toEqual("o");
  expect(board.mark(0, 1)).toEqual("x");
});

test('#step', () => {
  let board = new Board();
  board = board.step(1, 2, 'o');
  expect(board.marks).toEqual([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "o", "_"]
  ]);

  board = board.step(0, 1, 'x');
  expect(board.marks).toEqual([
    ["_", "_", "_"],
    ["x", "_", "_"],
    ["_", "o", "_"]
  ]);
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
    [0, 2], [2, 2]
  ]);
});

test('#rotate', () => {
  const board = new Board([
    ["_", "_", "_"],
    ["x", "_", "_"],
    ["_", "o", "_"]
  ]);
  expect(board.rotate().marks).toEqual([
    ["_", "x", "_"],
    ["o", "_", "_"],
    ["_", "_", "_"]
  ]);
});

test('#turn', () => {
  const board = new Board([
    ["_", "_", "_"],
    ["x", "_", "_"],
    ["_", "o", "_"]
  ]);
  expect(board.turn().marks).toEqual([
    ["_", "_", "_"],
    ["_", "_", "x"],
    ["_", "o", "_"]
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
    const board = new Board();
    expect(board.judgeWin('o')).toBeFalsy();
    expect(board.judgeWin('x')).toBeFalsy();
  });

  test('o win', () => {
    const board = new Board([
      ["_", "o", "_"],
      ["x", "o", "x"],
      ["_", "o", "_"]
    ]);
    expect(board.judgeWin('o')).toBeTruthy();
    expect(board.judgeWin('x')).toBeFalsy();
  });

  test('x win', () => {
    const board = new Board([
      ["o", "_", "x"],
      ["_", "x", "_"],
      ["x", "o", "o"]
    ]);
    expect(board.judgeWin('o')).toBeFalsy();
    expect(board.judgeWin('x')).toBeTruthy();
  });

  test('draw', () => {
    const board = new Board([
      ["o", "x", "o"],
      ["x", "o", "o"],
      ["x", "o", "x"]
    ]);
    expect(board.judgeWin('o')).toBeFalsy();
    expect(board.judgeWin('x')).toBeFalsy();
  });
});

describe('#status', () => {
  test('no winners', () => {
    const board = new Board();
    expect(board.status()).toEqual("");
  });

  test('o win', () => {
    const board = new Board([
      ["_", "o", "_"],
      ["x", "o", "x"],
      ["_", "o", "_"]
    ]);
    expect(board.status()).toEqual("o win");
  });

  test('x win', () => {
    const board = new Board([
      ["o", "_", "x"],
      ["_", "x", "_"],
      ["x", "o", "o"]
    ]);
    expect(board.status()).toEqual("x win");
  });

  test('draw', () => {
    const board = new Board([
      ["o", "x", "o"],
      ["x", "o", "o"],
      ["x", "o", "x"]
    ]);
    expect(board.status()).toEqual("draw");
  });
});
