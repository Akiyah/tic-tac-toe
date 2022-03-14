class Board {
  constructor(marks = this.mapPoints((x, y) => "_")) {
    this.marks = marks;
  }

  mapPoints(callback) {
    return [0, 1, 2].map(y => [0, 1, 2].map(x => callback(x, y)));
  }

  mark(x, y) {
    return this.marks[y][x];
  }

  step(x, y, mark) {
    let marks = this.mapPoints((x0, y0) => this.mark(x0, y0));
    marks[y][x] = mark;
    return new Board(marks);
  }

  key() {
    return this.marks.map(row =>
      row.map(mark => mark).join("")
    ).join("\n");
  }

  isBlank(x, y) {
    return this.mark(x, y) === "_";
  }

  blankPoints() {
    return this.mapPoints((x, y) => this.isBlank(x, y) ? [x, y] : null).flat().filter(p => p);
  }

  rotate() {
    const marks = this.mapPoints((x, y) => this.mark(y, 2 - x));
    return new Board(marks);
  }

  turn() {
    const marks = this.mapPoints((x, y) => this.mark(2 - x, y));
    return new Board(marks);
  }

  random(n) {
    return Math.floor(Math.random() * n);
  }

  // judgeLines() {

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
        return this.mark(x, y) == mark;
      });
    });
  }

  // judgeDraw() {

  status() {
    if (this.judgeWin("o")) {
      return "o win";
    }

    if (this.judgeWin("x")) {
      return "x win";
    }

    if (this.blankPoints().length == 0) {
      return "draw";
    }

    return "";
  }
}

module.exports = Board;
