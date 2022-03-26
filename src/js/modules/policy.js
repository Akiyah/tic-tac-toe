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
    const gamma = 0.9;

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

  createValue() {
    let value = Value.createZeroValue();
    let valueOld;

    do {
      valueOld = value;
      value = this.updateValueOnce(valueOld);
    } while (0.001 < value.delta(valueOld));

    return value;
  }

  updatePolicyOne() {
    const policy = Policy.createZeroPolicy();
    const value = this.createValue();
    const gamma = 0.9;

    Object.keys(this.map).forEach(key => {
      const board0 = Board.create(key);

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
            qs.push([[x1, y1], q]);
          } else { // 一手目が勝利
            const r = 1;
            const v1 = value.map[key1]; // 0
            qs.push([[x1, y1], r + gamma * v1]);
          }
        });

        //console.log(key);
        //console.log(qs);
        const qMax = Math.max(...(qs.map(pq => pq[1])));
        const [[x, y], q] = qs.find(pq => pq[1] === qMax);
        //console.log([[x, y], q]);
        policy.map[key][y][x] = 1;
      } else { // 決着がついている
        policy.map[key][0][0] = 1;
      }
    });

    return policy;
  }

  updatePolicy() {
    let policy = this;
    let policyOld;

    do {
      //console.log("x");
      policyOld = policy;
      policy = policyOld.updatePolicyOne();
    } while (0.001 < policy.delta(policyOld));

    return policy;
  }

  delta(policy) {
    const ds = Object.keys(this.map).map(key => {
      const d = [0, 1, 2].map(y =>
        [0, 1, 2].map(x =>
          Math.abs(this.map[key][y][x] - policy.map[key][y][x])
        )
      );
      return Math.max(...(d.flat()));
    });

    return Math.max(...ds);
  }
}

module.exports = Policy;
