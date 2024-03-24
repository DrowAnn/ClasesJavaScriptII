/* //Manipulacion del DOM

let lista = document.getElementById("listaOrdenada");

lista.addEventListener("click", function (event) {
  console.log(event.target.id);
});

let input = document.getElementById("myInput");

input.addEventListener("keydown", function (event) {
  console.log(event.key);
});

lista.addEventListener("click", function (event) {
  let element = event.target.tagName;
  if (element == "LI") {
    console.log(event.target.textContent);
  }
});

let listaTotal = document.querySelector("#contenedor ol");
console.log(listaTotal);

let inputHermano = listaTotal.nextElementSibling;
console.log(inputHermano);*/

// Programacion Asincrona
