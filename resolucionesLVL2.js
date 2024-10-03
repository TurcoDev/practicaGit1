// ejercicio 4 LVL2

function showDateTime() {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth()+1,
    date.getDate(),
    date.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  // 01/08/2020 04:08:20
  console.log(day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds);
  
}

showDateTime();


// Ejercicio 5 hecho con metodos
const reverseArray = (array) => {
  const invertido = array.reverse();
  console.log(invertido);
}

reverseArray([1,2,3,4,5]);
reverseArray(['hola', 'mundo']);
// ['Hola', 'Mundo']

// Ejercicio 9
function removeItemIndex(indice, array) {
  // removeItemIndex(2, [5, 8, 9, 4, 3, 4])
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i != indice) {
      result[result.length] = element;
    }
  }

  return result;
}

let res = removeItemIndex(4, [5, 8, 9, 4, 3, 4]);
console.log(res);

// modificacion ejercicio 9
// Queremos eliminar del array los elementos con el valor enviado

function removeItemsValue(valor, array) {
  // removeItemsValue(4, [5, 8, 9, 4, 3, 4])
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (valor != element) {
      result[result.length] = element;
    }
  }

  return result;
}

res = removeItemsValue(4, [5, 8, 9, 4, 3, 4]);
console.log(res);


// modificacion ejercicio 9
// Queremos obtener las posiciones donde se encuentra un elemento

function getIndexItem(valor, array) {
  // getIndexItem(4, [5, 8, 9, 4, 3, 4])
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (valor == element) {
      result[result.length] = i;
    }
  }

  return result;
}

res = getIndexItem(4, [5, 8, 9, 4, 3, 4]);
console.log(res);