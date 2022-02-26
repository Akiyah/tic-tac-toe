const γ = 0.9;
const η = 0.1;
const ε0 = 0.5;
// const EPISODE_COUNT = 10000;
const EPISODE_COUNT = 200000;

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

class QLearning {
  constructor() {
    this.table = {};
  }

  findValues(key) {
    let values = this.table[key];
    if (!values) {
      values = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      this.table[key] = values;
    }
    return values;
  }

  findMaxValue(key) {
    let values = this.findValues(key);
    return values.flat().reduce((a, b) => Math.max(a, b));
  }

  findMaxPositions(key) {
    let values = this.findValues(key);
    let maxValue = this.findMaxValue(key);
    let positions = [];
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (values[y][x] === maxValue) {
          positions.push([x, y]);
        }
      }
    }
    return positions;
  }

  updateDataWin(key, x, y) {
    this.updateData(key, x, y, 1, 0);
  }

  updateDataLose(key, x, y) {
    this.updateData(key, x, y, -1, 0);
  }

  updateDataDraw(key, x, y) {
    this.updateData(key, x, y, 0, 0);
  }

  updateDataContinue(key, x, y, nextKey) {
    this.updateData(key, x, y, 0, this.findMaxValue(nextKey));
  }

  updateData(key, x, y, reward, m) {
    let value = this.findValues(key)[y][x];
    this.table[key][y][x] += η * (reward + γ * m - value);
  }

  createBoard() {
    let board = new Board();
    if (Math.random() > 0.5) { // "o" が後手の場合
      [board] = board.randomStep("x");
    }
    return board;
  }

  learn() {
    for (let episode = 0; episode < EPISODE_COUNT; episode++) {
      if (episode % 1000 === 0) {
        console.log(`episode: ${episode}`);
      }
      this.learnEpisode();
    }
  }

  learnEpisode() {
    let board = this.createBoard();
    while (board.status() === "") {
      board = this.learnStep(board);
    }
  }

  learnStep(board) {
    let [board2, x2, y2] = board.randomStep("o");
    let status2 = board2.status();
    if (status2 === "o win") {
      this.updateDataWin(board.key(), x2, y2);
      return board2;
    } else if (status2 === "draw") {
      this.updateDataDraw(board.key(), x2, y2);
      return board2;
    }

    let [board3] = board2.randomStep("x");
    let status3 = board3.status();
    if (status3 === "x win") {
      this.updateDataLose(board.key(), x2, y2);
      return board3;
    } else if (status3 === "draw") {
      this.updateDataDraw(board.key(), x2, y2);
      return board3;
    }

    this.updateDataContinue(board.key(), x2, y2, board3.key());
    return board3;
  }
}

function showTable(container, key, values) {
  let table = document.createElement("table");
  container.appendChild(table);

  let tiles = key.split("\n").map(row => row.split(""));
  for (let y = 0; y < 3; y++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let x = 0; x < 3; x++) {
      let td = document.createElement("td");
      tr.appendChild(td);

      let mark = tiles[y][x];
      let value = values[y][x];
      td.innerText = mark;
      if (mark === " ") {
        td.innerText = value.toFixed(2);
        td.style.color = `rgba(0, 0, 0, 0.5)`;
        if (0 === value) {
          td.style.backgroundColor = `rgba(0, 0, 0, 0.3)`;
        } else if (0 < value) {
          let a = Math.abs(value);
          td.style.backgroundColor = `rgba(0, 255, 0, ${a})`;
        } else {
          let a = Math.abs(value);
          td.style.backgroundColor = `rgba(255, 0, 0, ${a})`;
        }
      }
    }
  }
}

function show(qTable) {

  for (let i = 0; i < 9; i++) {
    let h1 = document.createElement("h1");
    h1.innerText = i;
    document.body.appendChild(h1);

    console.log(i);
    let container = document.createElement("div");
    container.className = "container"
    document.body.appendChild(container);

    for (let key in qTable) {
      let values = qTable[key];

      var count = ( key.match( / /g ) || [] ).length;
      if ((9 - count) === i) {
        showTable(container, key, values);
      }
    }
  }
  console.log("end");
}

window.onload = () => {
  let qLarning = new QLearning();
  qLarning.learn();
  //console.log(qLarning);
  //console.log(qLarning.table);
  console.log(Object.keys(qLarning.table).length);
  show(qLarning.table);
};
