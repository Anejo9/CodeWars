// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



// My Solution 
// function simpleMultiplication(number) {
//     if (number % 2){
//       return number * 9
//     }
//   return number * 8
// }

const simpleMultiplication = number => number % 2 ? number * 9 : number * 8