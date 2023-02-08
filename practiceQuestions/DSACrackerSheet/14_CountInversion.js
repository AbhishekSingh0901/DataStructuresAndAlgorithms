/*Given an array of integers. Find the Inversion Count in the array. 

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. 
If array is already sorted then the inversion count is 0. 
If an array is sorted in the reverse order then the inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
 

Example 1:

Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 
has three inversions (2, 1), (4, 1), (4, 3).

Example 2:

Input: N = 5
arr[] = {2, 3, 4, 5, 6}
Output: 0
Explanation: As the sequence is already 
sorted so there is no inversion count.
*/

//BruteForce

const countSteps = function (arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(countSteps([2, 3, 4, 5, 6]));
console.log(countSteps([2, 4, 1, 3, 5]));
console.log(countSteps([1, 3, 2, 4, 5]));
console.log(countSteps([10, 10, 10]));
