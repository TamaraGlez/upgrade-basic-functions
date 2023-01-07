// no he sido capaz necesitaba mirar como lo resolvió santi
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
// function repeatCounter(arrayCounterDuplicates) {
// el array lo llamamos arrayCounterDuplicates podemos llamarlo como queramos es el array que nos darán es donde vamos a iterar
//     const result = {}
//     creamos result donde vamos a ir guardano i que será el producto de iterar en el array
    
//     for (let i = 0; i < arrayCounterDuplicates.length; i++) {
//         comprobamos si la palabra i exista dentro de result
//         if(arrayCounterDuplicates[i] in result ){
//             si existe sumamos uno cada vez que la encontremos
//             result[arrayCounterDuplicates[i]]++

//             } else {
//                 si no existe lo creamos con el valor inicial 
//                 result[arrayCounterDuplicates[i]] = 1;
//             }
            
//         }    
//         retornamos el resultado
//         return result; 
//     }

// console.log (repeatCounter(counterWords));


function repeatCounter(array) {
 const result = {};

 for (let i = 0; i < array.length; i++) {
    if (array[i] in result ) {
        result[array[i]]++
        
    } else {
        result[array[i]] = 1;
    }
 }
 return result;
}
console.log(repeatCounter(counterWords));
