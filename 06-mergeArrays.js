let a = ["a", "b", "c"];
let b = [1, 2, 3];

function intercalar(arr1, arr2) {
  let resultado = [];
  for (let i = 0; i < arr1.length; i++) {
    resultado.push(arr1[i], arr2[i]);
  }
  return resultado;
}

console.log(intercalar(a, b));
