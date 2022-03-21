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
}

module.exports = Value;
