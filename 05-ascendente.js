function esAscendente(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(esAscendente([2, 4, 6, 6, 9])); 
  console.log(esAscendente([5, 3, 8])); 