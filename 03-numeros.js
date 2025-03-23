let numeros = [0, -2, 5, 3, 0, -7, 9];

function contarValores(arr) {
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (let num of arr) {
    if (num > 0) positivos++;
    else if (num < 0) negativos++;
    else ceros++;
  }

  console.log("Positivos:", positivos);
  console.log("Negativos:", negativos);
  console.log("Ceros:", ceros);
}

contarValores(numeros);