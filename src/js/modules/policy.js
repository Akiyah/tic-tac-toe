const Board = require('./board');
const Value = require('./value');

class Policy {
  constructor(map) {
    this.map = map;
  }

  static createZeroPolicy() {
    const keys = Board.normalKeys();

    const map = new Map(keys.map(key => {
      return [key, [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]];
    }));

    return new Policy(Object.fromEntries(map));
  }

  static createRandomPolicy() {
    const policy = Policy.createZeroPolicy();

    Object.keys(policy.map).forEach(key => {
      const board = Board.create(key);
      const points = board.blankPoints();
      const n = points.length;
      points.forEach(([x, y]) => {
        policy.map[key][y][x] = 1 / n;
      });
    });

    return policy;
  }

  updateValueOnce(oldValue) {
    const value = Value.createZeroValue();
    const gamma = 1;

    Object.keys(this.map).forEach(key => {
      let v = 0;
      const board0 = Board.create(key);

      if (board0.status() === "") { // まだ決着がついてない
        board0.blankPoints().forEach(([x1, y1]) => { // 可能な一手目
          const p1 = this.map[key][y1][x1];
          const board1 = board0.step(x1, y1);
          const key1 = board1.normalize().key();

          if (board1.status() === "") { // 一手目の後に決着がついていない
            const points = board1.blankPoints();
            const n = points.length;
            const p2 = 1 / n;
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

              const v2 = oldValue.map[key2];
              v += p1 * p2 * (r + gamma * v2);
            });
          } else { // 一手目が勝利
            const r = 1;
            const v1 = oldValue.map[key1]; // 0
            v += p1 * (r + gamma * v1);
          }
        });
      }

      value.map[key] = v;
    });

    return value;
  }

  updateValue() {
    let value = Value.createZeroValue();
    let valueOld;

    do {
      valueOld = value;
      value = this.updateValueOnce(valueOld);
    } while (0.001 < value.delta(valueOld));

    return value;
  }
}

module.exports = Policy;
