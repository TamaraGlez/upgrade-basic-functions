// parametro=array,  si existes dos elementos iguales, nos devolverá la posición de ese elemento  y por la contra un false
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

function finderName(array, value) {
  for (let i = 0; i < array.length; i++) {
     if (array[i] === value) {
        return console.log(true, i);
      }
  }  
  return console.log(false);
}
finderName(nameFinder, "Peter");

      