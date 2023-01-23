/*Write a program to reverse an array or string

Example
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  if (arr.length === 1) return arr;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3]));
