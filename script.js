class Tile {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.mark = "";
    this.board = board;
    this.element = document.createElement("td");
    this.element.addEventListener("click", () => this.click());
  }

  click() {
    this.board.click(this.x, this.y);
  }

  update(mark) {
    this.mark = mark;
    this.element.innerHTML = this.mark;
  }

  isBlank() {
    return this.mark === "";
  }
}

class Board {
  constructor() {
    this.tiles = [];
    this.status = "";
    this.element = document.createElement("div");
    this.table = document.createElement("table");
    this.message = document.createElement("h1");
    this.element.appendChild(this.table);
    this.element.appendChild(this.message);
    for (let y = 0; y < 3; y++) {
      this.tiles[y] = [];
      let tr = document.createElement("tr");
      this.table.appendChild(tr);
      for (let x = 0; x < 3; x++) {
        let td = document.createElement("td");
        let tile = new Tile(x, y, this);
        this.tiles[y][x] = tile;
        tr.appendChild(tile.element);
      }
    }
  }

  blankTiles() {
    return this.tiles.flat().filter(tile => tile.isBlank());
  }

  judgeWin(mark) {
    let lines = [];
    lines = lines.concat([0,1,2].map(x => [0,1,2].map(y => [x, y])));
    lines = lines.concat([0,1,2].map(y => [0,1,2].map(x => [x, y])));
    lines = lines.concat([[0,1,2].map(i => [i, i])]);
    lines = lines.concat([[0,1,2].map(i => [i, 2-i])]);

    return lines.some(line => {
      return line.every(p => {
        let x = p[0];
        let y = p[1];
        return this.tiles[y][x].mark == mark;
      });
    });
  }

  updateMassage(text) {
    this.message.innerHTML = text;
  }

  updateStatus(status) {
    this.status = status;
    this.message.innerHTML = status;
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

function random(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

function initialize() {
  let container = document.getElementById("container");
  let board = new Board();
  container.appendChild(board.element);
}

initialize();