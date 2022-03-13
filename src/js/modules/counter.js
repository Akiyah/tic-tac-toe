const Board = require('./board');

class Counter {
  count() {
    let keys = [[], [], [], [], [], [], [], [], [], []];
    this.countKeys(new Board(), keys);

    let sum = 0;
    for (let i = 0; i <= 9; i++) {
      //console.log(i);
      //console.log(keys[i].length);
      console.log(this.uniq(keys[i]).length);
      sum += this.uniq(keys[i]).length;
    }

    console.log(sum);
  }

  countKeys(board, keys, k = 0) {
    keys[k].push(board.key());

    const mark = ((k % 2 == 0) ? 'o' : 'x');

    if (board.status() === "") {
      board.blankPoints().map(p => {
        const x = p[0];
        const y = p[1];
        const nextBoard = board.step(x, y, mark);
        this.countKeys(nextBoard, keys, k + 1);
      });
    }
  }

  uniq(array) {
    return [...new Set(array)];
  }
}

module.exports = Counter;
