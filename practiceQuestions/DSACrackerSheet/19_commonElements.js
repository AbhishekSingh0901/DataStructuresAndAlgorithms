//Common Elements

//Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.

//Method 1 using hasing:

// const commonElements = function (arr1, arr2, arr3) {
//   let m1 = {};
//   let m2 = {};
//   let m3 = {};
//   let common = [];

//   for (let num of arr1) {
//     m1[num] ? (m1[num] += 1) : (m1[num] = 1);
//   }
//   for (let num of arr2) {
//     m2[num] ? (m3[num] += 1) : (m2[num] = 1);
//   }
//   for (let num of arr3) {
//     m3[num] ? (m3[num] += 1) : (m3[num] = 1);
//   }

//   for (let num of arr1) {
//     if (m2[num] && m3[num] && m1[num]) {
//       common.push(num);
//       m1[num] = 0;
//     }
//   }
//   return common;
// };

// console.log(
//   commonElements(
//     [1, 5, 10, 20, 40, 40, 80],
//     [6, 7, 20, 80, 100],
//     [3, 4, 15, 20, 30, 70, 80, 120]
//   )
// );

//More optimised solution - space complexity O(1)

const commonElementsv = function (arr1, arr2, arr3) {
  let i = 0,
    j = 0,
    k = 0;
  let n1 = arr1.length;
  let n2 = arr2.length;
  let n3 = arr3.length;
  let common = [];
  while (i < n1 && j < n2 && k < n3) {
    let a = arr1[i];
    let b = arr2[j];
    let c = arr3[k];
    if (arr1[i] === arr2[j] && arr1[i] === arr3[k] && arr2[j] === arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else k++;

    let a1 = arr1[i - 1];
    let b1 = arr2[j - 1];
    let c1 = arr3[k - 1];
    while (arr1[i] === a1) i++;
    while (arr2[j] === b1) j++;
    while (arr3[k] === c1) k++;
  }

  return common;
};

console.log(
  commonElementsv(
    [1, 5, 10, 20, 40, 40, 80],
    [6, 7, 20, 80, 100],
    [3, 4, 15, 20, 30, 70, 80, 120]
  )
);
