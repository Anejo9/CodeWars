// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My Solution 
function countPositivesSumNegatives(input) {

    if(input === null) return[];
    if(input.filter(n => n != 0).length == 0) return [];

    let countOfPostive = 0;
    let sumOfNegative = 0;

    for (const n of input) {
      if (n < 0) sumOfNegative += n;
      if (n > 0) countOfPostive += 1;
    }
    return [countOfPostive, sumOfNegative]
  }