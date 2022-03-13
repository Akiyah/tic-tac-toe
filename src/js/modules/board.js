const Tile = require("./tile");

class Board {
  constructor(tiles = [0, 1, 2].map(y => [0, 1, 2].map(x => new Tile(x, y)))) {
    this.tiles = tiles;
  }

  step(x, y, mark) {
    let tiles = [0, 1, 2].map(y => [0, 1, 2].map(x => this.tiles[y][x]));
    tiles[y][x] = new Tile(x, y, mark);
    return new Board(tiles);
  }

  randomStep(mark) {
    let tile = this.randomBlankTile();
    let x = tile.x;
    let y = tile.y;
    return [this.step(x, y, mark), x, y];
  }

  isBlank(x, y) {
    return this.tiles[y][x].isBlank();
  }

  blankTiles() {
    return this.tiles.flat().filter(tile => tile.isBlank());
  }

  randomBlankTile() {
    let tiles = this.blankTiles();
    let i = Math.floor(Math.random() * tiles.length);
    return tiles[i];
  }

  key() {
    return this.tiles.map(row => {
      return row.map(tile => {
        return tile.mark;
      }).join("");
    }).join("\n");
  }

  judgeWin(mark) {
    let lines = [];
    lines = lines.concat([0, 1, 2].map(x => [0, 1, 2].map(y => [x, y])));
    lines = lines.concat([0, 1, 2].map(y => [0, 1, 2].map(x => [x, y])));
    lines = lines.concat([[0, 1, 2].map(i => [i, i])]);
    lines = lines.concat([[0, 1, 2].map(i => [i, 2 - i])]);

    return lines.some(line => {
      return line.every(p => {
        let x = p[0];
        let y = p[1];
        return this.tiles[y][x].mark == mark;
      });
    });
  }

  status() {
    if (this.judgeWin("o")) {
      return "o win";
    }

    if (this.judgeWin("x")) {
      return "x win";
    }

    if (this.blankTiles().length == 0) {
      return "draw";
    }

    return "";
  }
}

module.exports = Board;
