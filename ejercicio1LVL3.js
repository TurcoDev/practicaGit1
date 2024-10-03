/****
 * Modifique la función userIdGenerator. Declare un nombre de función userIdGenera-
tedByUser. No toma ningún parámetro pero toma dos entradas usando prompt().
Una de las entradas es la cantidad de caracteres y la segunda entrada es la canti-
dad de ID que se supone que se generarán.
 * 
 */


function userIdGenerator(cantChar){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^*(){}[]';
  let id = '';
  for (let i = 0; i < cantChar; i++) {
    let index = Math.floor(Math.random() * characters.length);
    id += characters[index];
    // id += characters[Math.floor(Math.random() * characters.length)];
  }
  return id;
}


function userIdGeneratedByUser(cantCharID, cantIDs){
  let arrayIDs = [];
  for (let i = 0; i < cantIDs; i++) {
    arrayIDs[i] = userIdGenerator(cantCharID);
    // arrayIDs.push(userIdGenerator(cantCharID));
  }
  return arrayIDs;
}

// userIdGenerator(20);
console.log(userIdGeneratedByUser(10, 5));
