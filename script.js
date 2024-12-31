let fruitDateLenght = 0;
let dbFruit = [];

function init() {
  const openPopupBtn = document.getElementById('openPopup');
  const closePopupBtn = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  fruitData();
}

async function fruitData() {
  try {
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    dbFruit = await response.json();
    fruitDateLenght = dbFruit.length;
    statusBar(response);
    dataExtra(dbFruit);
  } catch (error) {
    console.log("Fehler");
    alert("Datenbankfehler !!");
  }
}

function statusBar(response) {
  document.getElementById('Container1').innerHTML = '<span>Status : ' + response.status + '</span>';
  document.getElementById('Container2').innerHTML = '<span>OK : ' + response.ok + '</span>';
  document.getElementById('Container3').innerHTML = '<span>Type : ' + response.type + '</span>';
  document.getElementById('Container4').innerHTML = '<span>DB-Länge : ' + fruitDateLenght + '</span>';
}

function dataExtra(data) {
  for (i = 0; i < fruitDateLenght; i++) {
    let id = data[i]["id"];
    let name = data[i]["name"];
    let calor = data[i]["nutritions"]["calories"];
    let sugar = data[i]["nutritions"]["sugar"];
    render(i, id, name, calor, sugar);
  }
}

function render(line, id, name, calor, sugar) {
  let element = document.getElementById('Fruittable');
  element.innerHTML += templateTable(line, id, name, calor, sugar)
}

function popuoClose() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
};

function templateTable(line, id, name, calor, sugar) {
  return `
 <tr class="TableRow" id="fruitLine${line}" onclick="lineEvaluation(${line})">
   <th scope="row">${id}</th>
   <td>${name}</td>
    <td>${calor}</td>
    <td>${sugar}</td>
  </tr>
 `
}

function templateInfoBox(id) {
  return `
  <br>
  <br>
  <span>Name : ${dbFruit[id]["name"]}</span><br>
  <br>
  <span>Kalorien : ${dbFruit[id]["nutritions"]["calories"]}</span><br>
  <br>
  <span>Zucker : ${dbFruit[id]["nutritions"]["sugar"]}</span>
`
}

function lineEvaluation(id) {
  popup.style.display = 'block';
  overlay.style.display = 'block';
  let element = document.getElementById('fruitInfoBox');
  element.innerHTML = templateInfoBox(id);
}
