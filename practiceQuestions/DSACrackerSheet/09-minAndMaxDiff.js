/*Minimize the Heights II
Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.


Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.
*/

function getMinDiff(arr, k) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0]; // Maximum possible height difference

  let tempmin, tempmax;
  tempmin = arr[0];
  tempmax = arr[n - 1];

  for (let i = 1; i < n; i++) {
    let currmin = Math.min(arr[0] + k, arr[i] - k);
    if (currmin > 0) {
      tempmin = currmin;
    } // Minimum element when we
    // add k to whole array
    tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); // Maximum element when we
    // subtract k from whole array
    ans = Math.min(ans, tempmax - tempmin);
  }
  return ans;
}

//similarly for maz diff

function getMaxDiff(arr, k) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0]; // Maximum possible height difference

  let tempmin, tempmax;
  tempmin = arr[0];
  tempmax = arr[n - 1];

  for (let i = 1; i < n; i++) {
    let currmin = Math.min(arr[0] - k, arr[i] + k);
    if (currmin > 0) {
      tempmin = currmin;
    } // Minimum element when we
    // add k to whole array
    tempmax = Math.max(arr[i - 1] - k, arr[n - 1] + k); // Maximum element when we
    // subtract k from whole array
    ans = Math.max(ans, tempmax - tempmin);
  }
  return ans;
}

console.log(getMaxDiff([1, 4, 8, 10], 2));
console.log(getMinDiff([1, 4, 8, 10], 2));
