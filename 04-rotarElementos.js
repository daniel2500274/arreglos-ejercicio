let datos = [1, 2, 3, 4, 5, 6];

function rotarDerecha(arr) {
  let ultimo = arr.pop();
  arr.unshift(ultimo);
  return arr;
}

let resultado = rotarDerecha(datos);
console.log(resultado);