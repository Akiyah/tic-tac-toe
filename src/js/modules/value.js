const Board = require('./board');

class Value {
  constructor(map) {
    this.map = map;
  }

  static createZeroValue() {
    const keys = Board.normalKeys();
    const map = new Map(keys.map(key => [key, 0]));
    return new Value(Object.fromEntries(map));
  }

  delta(value) {
    const ds = Object.keys(this.map).map(key => {
      return Math.abs(value.map[key] - this.map[key]);
    });

    return Math.max(...ds);
  }
}

module.exports = Value;
