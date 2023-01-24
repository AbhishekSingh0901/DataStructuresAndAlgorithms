/**
 *Maximum and minimum of an array using minimum number of comparisons

 Given an array of size N. The task is to find the maximum and the minimum element 
 of the array using the minimum number of comparisons.

 Examples:

Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
        Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output: Minimum element is: 3
        Maximum element is: 35

Solution: Using Mulitple Pointer Techinique:
we'll use 3 pointers 1.one to loop over the whole arr
                     2.to point to the current min
                     3.to point to the curretn max
 */

function minMaxArr(arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length === 1) {
    min = arr[0];
    max = arr[0];
    return [min, max];
  }
  //for arr length greater than 1
  for (val of arr) {
    if (val > max) {
      max = val;
    }
    if (val < min) {
      min = val;
    }
  }
  return [min, max];
}

console.log(minMaxArr([22, 14, 8, 17, 35, 3]));
