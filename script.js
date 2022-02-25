class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.mark = "";
  }

  update(mark) {
    this.mark = mark;
  }

  isBlank() {
    return this.mark === "";
  }
}

class Board {
  constructor() {
    this.status = "";
    this.tiles = [];
    for (let y = 0; y < 3; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < 3; x++) {
        let tile = new Tile(x, y);
        this.tiles[y][x] = tile;
      }
    }
  }

  blankTiles() {
    return this.tiles.flat().filter(tile => tile.isBlank());
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

  updateStatus(status) {
    this.status = status;
  }

  click(x, y) {
    if (this.status !== '') {
      return;
    }

    let tile = this.tiles[y][x];
    if (!tile.isBlank()) {
      return;
    }
    this.tiles[y][x].update("o");

    if (this.judgeWin("o")) {
      this.updateStatus("o win");
      return;
    }

    let tiles = this.blankTiles();
    if (tiles.length == 0) {
      this.updateStatus("draw");
      return;
    }

    let i = Math.floor(Math.random() * tiles.length);
    tiles[i].update("x");

    if (this.judgeWin("x")) {
      this.updateStatus("x win");
      return;
    }
  }
}

class Game {
  constructor(id) {
    this.container = document.getElementById("container");
    this.start();
  }

  start() {
    this.board = new Board();

    this.boardDiv = document.createElement("div");
    let table = document.createElement("table");
    let h1 = document.createElement("h1");

    this.container.appendChild(this.boardDiv);
    this.boardDiv.appendChild(table);
    this.boardDiv.appendChild(h1);

    for (let y = 0; y < 3; y++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      for (let x = 0; x < 3; x++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.addEventListener("click", () => {
          this.board.click(x, y);
          this.refresh();
        });
      }
    }
  }

  refresh() {
    for (let y = 0; y < 3; y++) {
      let tr = this.boardDiv.getElementsByTagName("tr")[y];
      for (let x = 0; x < 3; x++) {
        let td = tr.getElementsByTagName("td")[x];
        td.innerText = this.board.tiles[y][x].mark;
      }
    }

    let h1 = this.boardDiv.getElementsByTagName("h1")[0];
    h1.innerText = this.board.status;

    if (this.board.status !== "") {
      this.start();
    }
  }
}

new Game("container");
