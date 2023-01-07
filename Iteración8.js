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
  function repeatCounter(arrayCounterDuplicates) {
// array sobre el que contamos se llama arrayCounterDuplicates
    const result = {};
// Objeto resultado sobre el que vamos a ir comparando palabras y si está repetidas
// recoorremos el array para mira cada una de ellas
   for (let i = 0; i < arrayCounterDuplicates.length; i++) {
// comprobamos q la palabra que miro en ese momento existe dentro de mi objetos resultado 
            if(arrayCounterDuplicates[i] in result){
                // sumamos 1 cada vez que lo encontramos
             result[arrayCounterDuplicates[i]]++;
            //  ++ es el incremento de 1
            //  accedemos a la propiedad del objeto
            //  la primera vuelta pasa por el else y la segunda por el if
        } else {
            // si no está lo añadimos y lo sumamos
            result [arrayCounterDuplicates[i]] = 1;

        }
    return result;
   }
  }
  console.log(repeatCounter(counterWords));

