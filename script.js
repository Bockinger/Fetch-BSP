function init() {
  fruitData();

}


async function fruitData() {

  try {
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    let data = await response.json();
    console.log(data.status);
    console.log(data.ok);
    console.log(data);
    dataExtra(data);

  } catch (error) {
    console.log("Fehler");
  }

}

function dataExtra(data) {

}


function render() {


}

function template() {

  return `

  `
}
