function showTable(container, marks, policy, value) {
  let table = document.createElement("table");
  container.appendChild(table);

  for (let y = 0; y < 3; y++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let x = 0; x < 3; x++) {
      let td = document.createElement("td");
      tr.appendChild(td);

      let mark = marks[y][x];
      let v = value[y][x];
      let p = policy[y][x];
      td.innerText = mark;
      if (mark === "_") {
        td.innerText = v.toFixed(2);
        td.style.color = `rgba(0, 0, 0, 0.5)`;
        if (0 === v) {
          td.style.backgroundColor = `rgba(0, 0, 0, 0.3)`;
        } else if (0 < v) {
          let a = Math.abs(v);
          td.style.backgroundColor = `rgba(0, 255, 0, ${a})`;
        } else {
          let a = Math.abs(v);
          td.style.backgroundColor = `rgba(255, 0, 0, ${a})`;
        }
        if (1 === p) {
          td.style.border = `solid thick black`;
        }
      }
    }
  }
}

function show(map) {
  Object.keys(map).forEach(key => {
    const marks = key.split("\n").map(row => {
      return row.split("");
    });

    const policy = map[key][0];
    const value = map[key][1];

    console.log(marks);
    const count = marks.flat().filter(mark => mark !== "_").length
    console.log(count);

    let container = document.getElementById(`div${count}`);
    showTable(container, marks, policy, value);
  });
}

window.onload = () => {
  show(POLICY_VALUE_MAP);
};
