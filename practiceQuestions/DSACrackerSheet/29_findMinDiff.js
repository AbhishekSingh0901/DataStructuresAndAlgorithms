// Chocolate Distribution Problem

/**Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. 
 * Each packet can have a variable number of chocolates. 
 * There are M students, the task is to distribute chocolate packets among M students such that :
1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

Example 1:

Input:
N = 8, M = 5
A = {3, 4, 1, 9, 56, 7, 9, 12}
Output: 6
Explanation: The minimum difference between 
maximum chocolates and minimum chocolates 
is 9 - 3 = 6 by choosing following M packets :
{3, 4, 9, 7, 9}.
Example 2:

Input:
N = 7, M = 3
A = {7, 3, 2, 4, 9, 12, 56}
Output: 2
Explanation: The minimum difference between
maximum chocolates and minimum chocolates
is 4 - 2 = 2 by choosing following M packets :
{3, 2, 4}. 
*/

const finMinDiff = function (arr, n = arr.length, m) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let ans = arr[m - 1] - arr[0];
  for (let i = 1; i < n - m + 1; i++) {
    ans = Math.min(ans, arr[m - 1 + i] - arr[i]);
  }
  return ans;
};

console.log(finMinDiff([3, 4, 1, 9, 56, 7, 9, 12], 8, 5));
console.log(finMinDiff([7, 3, 2, 4, 9, 12, 56], 7, 3));
console.log(
  finMinDiff(
    [
      34, 88, 89, 39, 67, 71, 85, 57, 18, 7, 61, 50, 38, 6, 60, 18, 19, 46, 84,
      74, 59,
    ],
    21,
    12
  )
);
