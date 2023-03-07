/**
 * Given an array of integers (A[])  and a number x,
 * find the smallest subarray with sum greater than the given value.
 * If such a subarray do not exist return 0 in that case.
 *
 * Note: The answer always exists. It is guaranteed that x doesn't exceed the summation of a[i] (from 1 to N).
 *
 * Example 1:
 *
 * Input:
 * A[] = {1, 4, 45, 6, 0, 19}
 * x  =  51
 * Output: 3
 *
 * Explanation:
 * Minimum length subarray is
 * {4, 45, 6}
 *
 * Example 2:
 * Input:
 * A[] = {1, 10, 5, 2, 7}
 * x  = 9
 *
 * Output: 1
 * Explanation:
 * Minimum length subarray is {10}
 */

const minsubArrLength = function (arr, x, n = arr.length) {
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let total = 0;

  while (start < n) {
    if (total <= x && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total > x) {
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      start++;
    } else break;
  }

  return minLength === Infinity ? 0 : minLength;
};

console.log(minsubArrLength([6, 3, 4, 5, 4, 3, 7, 9], 16));
