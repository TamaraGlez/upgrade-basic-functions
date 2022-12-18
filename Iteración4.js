const numbers = [12, 21, 38, 5, 45, 37, 6];
// let sumTotal = 0;
// sumTotal = 
// function average(param) {
//   for (number of numbers);
//   return console.log(sumTotal += number )
// }
// average(numbers)

function average(params) {
let sum = 0;
for (let i = 0; i < params.length; i++) {
    sum += params[i];
    console.log(params[i]);
    }
    return console.log(sum/params.length);
}
average(numbers);