/**
 * Maximum Product Subarray
 *
 * Given an array Arr[] that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray.
 *
 * Example 1:
 *
 * Input:
 * N = 5
 * Arr[] = {6, -3, -10, 0, 2}
 * Output: 180
 * Explanation: Subarray with maximum product is [6, -3, -10] which gives product as 180.
 *
 * Example 2:
 * Input:
 * N = 6
 * Arr[] = {2, 3, 4, 5, -1, 0}
 * Output: 120
 * Explanation: Subarray with maximum product is [2, 3, 4, 5] which gives product as 120.
 */

//* Brute Force:

// const maxProduct = function (arr, n = arr.length) {
//   let max = arr[0];
//   for (let i = 0; i < n; i++) {
//     let currPrduct = 1;
//     for (let j = i; j < n; j++) {
//       currPrduct *= arr[j];
//       console.log(currPrduct);
//       max = Math.max(max, currPrduct);
//     }
//   }
//   return max;
// };

// console.log(maxProduct([2, 3, -2, 4]));

//*Optimised Force:

const maxProduct = function (arr, n = arr.length) {
  let max = arr[0];
  let ma = max;
  let mi = max;

  for (let i = 1; i < n; i++) {
    if (arr[i] < 0) {
      [ma, mi] = [mi, ma];
    }

    ma = Math.max(arr[i], arr[i] * ma);
    mi = Math.min(arr[i], arr[i] * mi);
    max = Math.max(max, ma);
  }
  return max;
};

console.log(maxProduct([2, 3, -2, 4]));
