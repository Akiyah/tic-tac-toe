const Board = require('./board');

class Policy {
  constructor(map) {
    this.map = map;
  }

  static createRandomPolicy() {
    const keys = Board.normalKeys();

    const map = new Map(keys.map(key => {
      const board = Board.create(key);
      const points = board.blankPoints();
      const n = points.length;
      let actions = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      points.forEach(([x, y]) => {
        actions[y][x] = 1 / n;
      });
      return [key, actions];
    }));

    return new Policy(Object.fromEntries(map));
  }
}

module.exports = Policy;
