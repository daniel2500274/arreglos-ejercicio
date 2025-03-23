let palabras = ["computadora", "mesa", "silla", "mouse"];

function contarVocales(arr) {
  for (let palabra of arr) {
    let contador = 0;
    for (let letra of palabra) {
      if ("aeiou".includes(letra)) {
        contador++;
      }
    }
    console.log(palabra + ": " + contador + " vocales");
  }
}

contarVocales(palabras);
