// lo he sacado mirando las respuesta me ha costado
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

      