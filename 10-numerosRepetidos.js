let datos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

function numeroMasRepetido(arr) {
  let maxRepeticiones = 0;
  let numeroMasRepetido;

  for (let i = 0; i < arr.length; i++) {
    let contador = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        contador++;
      }
    }
    if (contador > maxRepeticiones) {
      maxRepeticiones = contador;
      numeroMasRepetido = arr[i];
    }
  }

  console.log("Número más repetido:", numeroMasRepetido, "(" + maxRepeticiones + " veces)");
}

numeroMasRepetido(datos); 