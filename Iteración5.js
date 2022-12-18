const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(array) {
    let sumTotal = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    if (typeof element === "string") {
        sumTotal += element.length;
    }    
}
return console.log(sumTotal/array.length);
}
averageWord(mixedElements);

// for (const element of array) {
//     let sumTotal = 0;
//     if (element <= 0) {
//         console.log(sumTotal += element);       
//     } else {
//         console.log(sumTotal += element.length);
//     }
//     return console.log(sumTotal);
// }
// }
// averageWord(mixedElements);
