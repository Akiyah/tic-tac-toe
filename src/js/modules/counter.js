const Board = require('./board');
const Value = require('./value');
const Policy = require('./policy');

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

  createPolicyValueMap() {
    const gamma = 0.9;
    let policy = Policy.createRandomPolicy();
    policy = policy.updatePolicy();
    let value = policy.createValue();
    //console.log(value);

    let map = {};

    Object.keys(policy.map).forEach(key => {
      const board0 = Board.create(key);
      const vs = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

      if (board0.status() === "") { // まだ決着がついてない
        const qs = [];

        board0.blankPoints().forEach(([x1, y1]) => { // 可能な一手目
          const board1 = board0.step(x1, y1);
          const key1 = board1.normalize().key();

          if (board1.status() === "") { // 一手目の後に決着がついていない
            const points = board1.blankPoints();
            const n = points.length;
            const p2 = 1 / n;
            let q = 0;
            points.forEach(([x2, y2]) => { // 可能な二手目（ランダム）
              const board2 = board1.step(x2, y2);
              const key2 = board2.normalize().key();

              let r;
              if (board2.status() === "") {
                r = 0;
              } else if (board2.status() === "draw") {
                r = 0;
              } else { // 二手目が勝利
                r = -1;
              }

              const v2 = value.map[key2];
              q += p2 * (r + gamma * v2);
            });
            vs[y1][x1] = q;
          } else { // 一手目が勝利
            const r = 1;
            const v1 = value.map[key1]; // 0
            vs[y1][x1] = r + gamma * v1;
          }
        });
      }

      map[key] = [policy.map[key], vs];
    });
    return map;
  }
}

module.exports = Counter;
