let palabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"];

function filtrarPalabras(arr) {
  return arr.filter((palabra) => palabra.length > 5);
}

console.log(filtrarPalabras(palabras));
