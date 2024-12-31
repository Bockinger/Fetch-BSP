
let fruitDateLenght = 0;


function init() {
  fruitData();
  render();
}


async function fruitData() {
  try {
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    let data = await response.json();
    fruitDateLenght = data.length;
    statusBar(response);
    dataExtra(data);
    console.log(data);

  } catch (error) {
    console.log("Fehler");
  }

}


function statusBar(response) {
  document.getElementById('Container1').innerHTML = '<span>Status : ' + response.status + '</span>';
  document.getElementById('Container2').innerHTML = '<span>OK : ' + response.ok + '</span>';
  document.getElementById('Container3').innerHTML = '<span>Type : ' + response.type + '</span>';
  document.getElementById('Container4').innerHTML = '<span>DB-Länge : ' + fruitDateLenght + '</span>';
}



function dataExtra(data) {

  console.log("Datenläange ", fruitDateLenght);

  for (i = 0; i < fruitDateLenght; i++) {
    let id = data[i]["id"];
    let name = data[i]["name"];


    render(id, name);
  }


}


function render(id, name) {
  let element = document.getElementById('Fruittable');
  element.innerHTML += template(id, name);
}



function template(id, name) {
  return `
 <tr>
   <th scope="row">${id}</th>
   <td>${name}</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>

  `
}
