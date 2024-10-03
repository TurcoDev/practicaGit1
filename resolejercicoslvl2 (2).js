
// Ejercicio 14 lvl2

function suma(...params) {
  console.log(params);
  let suma = 0;
  for (let i = 0; i < params.length; i++) {
    suma += params[i];
  }
  console.log("🚀 ~ suma ~ suma:", suma)
}

suma(1, 2, 3, 4)
suma(1, 2, 3, 34, 5, 26, 2, 8, 9, 11)
                      
let num = Math.floor((Math.random() * 255));
console.log(num);

// funcion que devuelve un digito hexadecimal aleatorio

function digitoHexa() {
  const valoresHexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let indice = Math.floor(Math.random() * valoresHexa.length);
  return valoresHexa[indice];
}

console.log('Digito hexa:', digitoHexa());
