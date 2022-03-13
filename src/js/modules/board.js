class Board {
  constructor(
    marks = this.mapPoints((x, y) => "_"),
    k = 0
  ) {
    this.marks = marks;
    this.k = k;
  }

  mapPoints(callback) {
    return [0, 1, 2].map(y => [0, 1, 2].map(x => callback(x, y)));
  }

  step(x, y, mark) {
    let marks = this.mapPoints((x, y) => this.marks[y][x]);
    marks[y][x] = mark;
    return new Board(marks, this.k + 1);
  }

  key() {
    return this.marks.map(row =>
      row.map(mark => mark).join("")
    ).join("\n");
  }

  isBlank(x, y) {
    return this.marks[y][x] === "_";
  }

  blankPoints() {
    return this.mapPoints((x, y) => this.isBlank(x, y) ? [x, y] : null).flat().filter(p => p);
  }

  randomStep(mark) {
    let tile = this.randomBlankTile();
    let x = tile.x;
    let y = tile.y;
    return [this.step(x, y, mark), x, y];
  }

  randomBlankTile() {
    let tiles = this.blankTiles();
    let i = Math.floor(Math.random() * tiles.length);
    return tiles[i];
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
