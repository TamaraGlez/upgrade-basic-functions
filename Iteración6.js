const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
  ];
  function removeDuplicates(array) {
        // creo un for para recorrer el arrive guadardo los elementos en i
    for (let i = 0; i < array.length; i++) {
        // creo otro for dentro del anterior para que recorra el array pero comenzando en 1 y guardando datos en x
        // en x = i + 1 lo que le indico es que en la segunda vuelta comience en un mas 
        for (let x = i + 1; x < array.length; x++) {
        // creamos la condicion de si cualquier elemento del x es igual al de i
    if (array[i] === array[x]) {
        // el resultado será eliminar los elementos de x (es quien compara) que se encuentren en i eliminando 1
           array.splice(x, 1); 
        //    retroceder para comprobar la posición eliminada que ocupa el siguiente
           x--;
        }
    }
}
return array;
}
console.log(removeDuplicates(duplicates))

// VER CLASES Y HACERLO COMO JOAN PARA PRACTICAR LA MEJOR OPCIÓN