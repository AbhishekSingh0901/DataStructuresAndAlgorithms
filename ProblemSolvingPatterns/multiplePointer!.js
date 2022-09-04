/*multiple pointer techinques is basically ceating 2 pointers
or values that correspond to an index or position and move towards 
the beginning, end or middle based on a certain condition */

/*Example: write a function sumZero which accepts a sorted array of 
integers.the function should find the first pair where the sum is 0.
Return an array that includes both values that sum to 0 or undefined 
if a pair does not exist*/

//basic approach o(n**2) complexity
// function sumZero(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         rreturn[(arr[i], arr[j])];
//       }
//     }
//   }
// }

//better solution using multiple pointers pattern TC -o(n)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
