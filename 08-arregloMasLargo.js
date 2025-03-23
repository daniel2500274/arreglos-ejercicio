let numeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];

function subarregloMasLargo(arr) {
  let maxSubarreglo = [];
  let subarregloActual = [];

  for (let num of arr) {
    if (num !== 0) {
      subarregloActual.push(num);
      if (subarregloActual.length > maxSubarreglo.length) {
        maxSubarreglo = [...subarregloActual];
      }
    } else {
      subarregloActual = [];
    }
  }
  return maxSubarreglo;
}

console.log(subarregloMasLargo(numeros));
