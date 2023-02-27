/**
 * Rearrange array in alternating positive & negative items with O(1) extra space | Set 1
 * Given an array of positive and negative numbers, arrange them in an alternate fashion
 * such that every positive number is followed by a negative and vice-versa maintaining the order of appearance.
 * The number of positive and negative numbers need not be equal.
 * If there are more positive numbers they appear at the end of the array.
 * If there are more negative numbers, they too appear at the end of the array.
 *
 *
 * Examples:
 * Input:  arr[] = {1, 2, 3, -4, -1, 4}
 * Output: arr[] = {-4, 1, -1, 2, 3, 4}
 *
 * Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
 * Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
 */

//Brute force method:

// const Rearrange = function (arr) {
//   let positiveArr = [];
//   let negativeArr = [];
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   for (let val of arr) {
//     if (val < 0) {
//       negativeArr.push(val);
//     } else {
//       positiveArr.push(val);
//     }
//   }

//   while (i < positiveArr.length && j < negativeArr.length) {
//     if (k % 2 === 0) {
//       arr[k] = negativeArr[j];
//       j++;
//       k++;
//     } else {
//       arr[k] = positiveArr[i];
//       i++;
//       k++;
//     }
//   }

//   while (i < positiveArr.length) {
//     arr[k] = positiveArr[i];
//     i++;
//     k++;
//   }

//   while (j < negativeArr.length) {
//     arr[k] = negativeArr[j];
//     j++;
//     k++;
//   }

//   return arr;
// };

//optimised solution: order does not metter
// const Rearrange = function (arr) {
//   let i = 0;
//   let j = 0;
//   while (i < arr.length) {
//     if (arr[i] < 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j++;
//     } else i++;
//   }

//   if (j === 0 || j === arr.length - 1) {
//     return arr;
//   }

//   let k = 1;
//   while (k < arr.length && j < arr.length) {
//     [arr[k], arr[j]] = [arr[j], arr[k]];
//     j++;
//     k += 2;
//   }

//   return arr;
// };
// console.log(Rearrange([-5, -2, 5, 2, -4, 7, 1, -6, 0, -8]));
// console.log(Rearrange([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
// console.log(Rearrange([1, 2, 3, -4, -1, 4]));

//Optimised solution: where the order matters too;

function rotate(arr, start, end) {
  let x = arr[end];
  for (let i = end; i > start; i--) arr[i] = arr[i - 1];
  arr[start] = x;
  return arr;
}

// console.log(rotate([-5, -2, 5, 2, -4, 7, 1, -6, 0, -8], 2, 7));

const Rearrange = function (arr) {
  let i = 0;
  let n = arr.length;
  for (i = 0; i < n; i++) {
    let j = 0;
    if (arr[i] >= 0 && i % 2 === 0) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < 0) {
          arr = rotate(arr, i, j);
          break;
        }
      }
    } else if (arr[i] < 0 && i % 2 !== 0) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] > 0) {
          arr = rotate(arr, i, j);
          break;
        }
      }
    }
  }
  return arr;
};

console.log(Rearrange([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
console.log(Rearrange([-5, -2, 5, 2, -4, 7, 1, -6, 0, -8]));
