let notas = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];

function promedioSinExtremos(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let suma = 0;
  let contador = 0;

  for (let nota of arr) {
    if (nota !== min && nota !== max) {
      suma += nota;
      contador++;
    }
  }

  let promedio = suma / contador;
  console.log("Notas excluidas:", min, max);
  console.log("Promedio:", promedio);
}

promedioSinExtremos(notas);