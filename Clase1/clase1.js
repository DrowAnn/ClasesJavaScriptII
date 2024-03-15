/* //Scope

let variable = 44;

function contador() {
  let inicio = 0;

  if (inicio == 0) {
    let adicion = 1;
    var sustraccion = 2
    console.log(`${variable} ${inicio} ${adicion} ${sustraccion}`);
  }
  //console.log(`${variable} ${inicio} ${adicion} ${sustraccion}`); No accede a la variable "adicion" dentro del if
  console.log(`${variable} ${inicio} ${sustraccion}`); //Accede a "sustraccion" por que se declaro con var y no respeta scope de bloque
}

contador();
//console.log(`${variable} ${inicio} ${adicion} ${sustraccion}`); No accede a las varibles "inicio", "adicion" y "sustraccion" dentro de la funcion contador
console.log(`${variable}`);*/

/* // Clousures

function getset() {
  let variable = 0;

  function setVariable(nuevoValor) {
    variable = nuevoValor;
  }

  function getVariable() {
    return variable;
  }

  return {
    get: getVariable,
    set: setVariable,
  };
}

//console.log(`${variable}`); No accede a "variable"
let clase1 = getset();
console.log(clase1);
console.log("Valor inicial clase1: " + clase1.get());
clase1.set(5);
console.log("Valor despues del set a clase1: " + clase1.get());

let clase2 = getset();
console.log("Valor inicial clase2: " + clase2.get());
clase2.set(8);
console.log("Valor despues del set a clase2: " + clase2.get());*/

// callbacks

function llamado(num1, num2, accion) {
  let suma = num1 + num2;
  accion(suma);
}

function imprimir(valor) {
  console.log(valor);
}

function doble(valor) {
  console.log(valor * 2);
}

function cuadrado(valor) {
  console.log(valor ** 2);
}
