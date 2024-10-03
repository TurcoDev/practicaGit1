
// saludo generico
function saludo() {
  console.log("Hola como estas?.");
}

saludo();
saludo();

// Saludo con nombre
function saludoConNombre(nombre) {
  console.log("Hola " + nombre + " como estas?.");
}

saludoConNombre("Emmanuel");
saludoConNombre("Pedro");

// saludo con nombre y apellido
function saludoConNombreYApellido(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido + " como estas?.");
}

// saludo con nombre y apellido y retorno de cadena
function saludoConNombreYApellidoRetorno(nombre, apellido) {
  return "Hola " + nombre + " " + apellido + " como estas?.";
}

let resultadoSaludo = saludoConNombreYApellidoRetorno("Emmanuel", "Caballero");
console.log(resultadoSaludo);





function cantidadDeVeces(nroQueSeRepite) {
  const arrayConDuplicados2 = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 1, 8, 9];
  const arraySinDuplicados2 = [];

  for (let j = 0; j < arrayConDuplicados2.length; j++) {
    let datoActual = arrayConDuplicados2[j]
    let dumbtest = 0;
    for (let i = 0; i < arrayConDuplicados2.length; i++) {
      if (datoActual == arrayConDuplicados2[i]) {
        dumbtest++
      }
    }
    if (dumbtest == nroQueSeRepite) {
      arraySinDuplicados2[arraySinDuplicados2.length] = datoActual
    }
  }

  return arraySinDuplicados2;
}

let result = cantidadDeVeces(1);
console.log("Solucion Emmanuel con una repeticion:", result)

result = cantidadDeVeces(2);
console.log("Solucion Emmanuel con dos repeticiones:", result)

console.log("Solucion Emmanuel con tres repeticiones:", cantidadDeVeces(3));