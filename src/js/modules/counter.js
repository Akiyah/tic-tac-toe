const Board = require('./board');

class Counter {
  count() {
    let keys = [[], [], [], [], [], [], [], [], [], []];
    this.countKeys(new Board(), keys);

    let sum = 0;
    for (let i = 0; i <= 9; i++) {
      console.log(this.uniq(keys[i]).length);
      sum += this.uniq(keys[i]).length;
    }

    console.log(sum);
    return keys;
  }

  countKeys(board, keys, k = 0) {
    const key = board.key();
    if (keys[k].includes(key)) {
      return;
    }
    keys[k].push(key);

    if (board.status() === "") {
      const mark = ((k % 2 == 0) ? 'o' : 'x');
      board.blankPoints().map(([x, y]) => {
        const nextBoard = board.step(x, y, mark);
        this.countKeys(nextBoard, keys, k + 1);
      });
    }
  }

  countNormalize() {
    let keys = [[], [], [], [], [], [], [], [], [], []];
    this.countNormalizeKeys(new Board(), keys);

    let sum = 0;
    for (let i = 0; i <= 9; i++) {
      console.log(keys[i].length);
      sum += keys[i].length;
    }

    console.log(sum);
    //const util = require('util');
    //console.log(util.inspect(keys[4], { maxArrayLength: null }));
    return keys;
  }

  countNormalizeKeys(board, keys, k = 0) {
    const key = board.normalize().key();
    if (keys[k].includes(key)) {
      return;
    }
    keys[k].push(key);

    if (board.status() === "") {
      const mark = ((k % 2 == 0) ? 'o' : 'x');
      board.blankPoints().map(([x, y]) => {
        const nextBoard = board.step(x, y, mark);
        this.countNormalizeKeys(nextBoard, keys, k + 1);
      });
    }
  }

  uniq(array) {
    return [...new Set(array)];
  }
}

module.exports = Counter;
