const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(array){
  // agarro la primera posición para ir comparando
let longestWord = array[0]
// empezamos en 1 ya que la posicion 0 ya la tengo
for (let index = 1; index < array.length; index++) {
  // guardamos en la variable la palabra que se usa en el bucle
  const word = array[index];
  // es mas larga que la longitud que tengo en mi palabra mas larga si lo es la cambiamos
  // cuando es igual no hace nada el igual hace que vaya sustituyendo
  if(word.length >= longestWord.length ){
   longestWord = word;
  }
}
return longestWord 
}

console.log(findLongestWord(avengers))

// function findLongestWord(avenger) {
//   const longestWord = [];
//   for (let i = 1; i < avenger.length; i++) {
//     if((avenger[i].length) > longestWord.length){
//   longestWord = avenger[i];
//   }
// }
// return console.log(longestWord);
// findLongestWord(avengers)
// }
