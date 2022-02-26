const γ = 0.9;
const η = 0.1;
const ε0 = 0.5;

class Tile {
  constructor(x, y, mark = " ") {
    this.x = x;
    this.y = y;
    this.mark = mark;
  }

  isBlank() {
    return this.mark === " ";
  }
}

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
    return this.step(tile.x, tile.y, mark);
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

class Game {
  constructor(id) {
    this.container = document.getElementById(id);

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
          this.step(x, y);
        });
      }
    }
  }

  step(x, y) {
    if (!this.board.isBlank(x, y)) {
      return;
    }
    if (this.board.status() !== "") {
      return;
    }

    let board2 = this.board.step(x, y, "o");
    if (board2.status() !== "") {
      this.board = board2;
      this.refresh();
      return;
    }

    let board3 = board2.randomStep("x");

    this.board = board3;
    this.refresh();
    return;
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
    h1.innerText = this.board.status();
  }
}

function restart() {
  new Game("container");
}
window.onload = restart;
