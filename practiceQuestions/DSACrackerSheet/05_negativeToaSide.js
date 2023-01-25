/*Move all negative numbers to beginning and positive to end with constant extra space
An array contains both positive and negative numbers in random order. 
Rearrange the array elements so that all negative numbers appear before all positive numbers
Examples : 

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
*/

function rearrange(arr, n) {
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      if (i != j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
        console.log(i, j);
      }
      j++;
    }
  }
  console.log(arr);
}

rearrange([-12, 11, -13, -5, 6, -7, 5, -3, -6], 9);
