const Board = require('./board');

class Policy {
  constructor() {
    const keys = Board.normalKeys();

    this.map = new Map(keys.map(key => {
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
  }
}

module.exports = Policy;
