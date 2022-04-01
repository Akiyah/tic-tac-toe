function initialize(container, w, h) {
  let table = document.createElement("table");
  container.appendChild(table);

  for (let y = 0; y < h; y++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let x = 0; x < w; x++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
}

function show(container, data) {
  //console.log(data);
  const policy = data[0].split("\n").map(line => line.split(''));
  const episode = data[1].split("\n").map(line => line.split(''));
  let trs = container.getElementsByTagName('tr')
  for (let y = 0; y < trs.length; y++) {
    let tr = trs[y];
    let tds = tr.getElementsByTagName('td')
    for (let x = 0; x < tds.length; x++) {
      let td = tds[x];
      td.innerText = policy[y][x];

      td.style.backgroundColor = ``;
      if (policy[y][x] === '#') {
        td.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;
      }
      if (episode[y][x] === '+') {
        td.style.backgroundColor = `rgba(255, 0, 0, 1)`;
      }
    }
  }
}

window.onload = () => {
  const container = document.getElementById('container');
  const message = document.getElementById('message');
  initialize(container, 49, 18);
  //console.log(RESULT_STRINIG.length);
  //console.log(RESULT_STRINIG[4000]);
  let i = 0;
  window.setInterval(() => {
    if (i <= 5000) {
      show(container, RESULT_STRINIG[i]);
      message.innerText = `${i} / 5000`
      //console.log(i);
      i++;
    }
  }, 20);
  //console.log(RESULT_STRINIG[4000][0]);
  //console.log(RESULT_STRINIG[4000][1]);
};
