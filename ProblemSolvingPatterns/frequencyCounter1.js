"use strict!";

//Naive approach

// function same(arr1, arr2) {
//   let i, j;
//   let l1 = arr1.length;
//   let l2 = arr2.length;

//   if (l1 !== l2) {
//     return false;
//   }
//   for (let i = 0; i < l1; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     // console.log(correctIndex);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//     // console.log(arr2);
//   }
//   return true;
// }

// console.log(same([1, 2, 3, 4, 1], [16, 4, 9, 1, 4]));

//Refactored - better Approach with o(n) complexity space complexity o(n) too;

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    // console.log(frequencyCounter1);
  }

  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    // console.log(frequencyCounter2);
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}
console.log(same([1, 2, 3, 3, 4], [9, 9, 4, 16, 1]));
