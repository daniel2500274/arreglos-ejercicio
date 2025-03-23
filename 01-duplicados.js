const nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Juan"];

function eliminarDuplicados(arreglo) {
  let unicos = [];
  for (let nombre of arreglo) {
    if (!unicos.includes(nombre)) {
      unicos.push(nombre);
    }
  }
  return unicos;
}

let nombresUnicos = eliminarDuplicados(nombres);
console.log(nombresUnicos); 