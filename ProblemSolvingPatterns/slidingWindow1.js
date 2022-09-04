/*write s function call maxSubarraySum which accepts an array of 
integers and a number called n. the Funcition should calculate the max 
sum of n consecutive elements in the array */

//Naive Approach/ Brute force
// function maxSubarraySum(arr, n) {
//   if (arr.length < n) {
//     return null;
//   }

//   let maxSum = -Infinity;
//   for (let i = 0; i <= arr.length - num; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

//USing the Sliding Window:
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = 0; i < arr.length - num; i++) {
    tempSum = tempSum - arr[i] + arr[i + num];
    console.log(tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([2, 3, 5, 6, 2, 3, 1], 2));
