//Brute force method: o(n^3) complexity: really bad

// const find3Numbers = function (arr, n = arr.length, x) {
//   let count = 0;
//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (arr[i] + arr[j] + arr[k] === x) {
//           console.log(arr[i], arr[j], arr[k]);
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

// console.log(find3Numbers([1, 4, 45, 6, 10, 8], 6, 13));

//Optimised Solution: using set;

// const find3Numbers = function (arr, n = arr.length, x) {
//   let ans = 0;
//   let s = new Set();
//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (s.has(x - arr[i] - arr[j])) {
//         ans = 1;
//         break;
//       }
//       s.add(arr[j]);
//     }
//   }
//   return ans;
// };
// console.log(find3Numbers([1, 4, 45, 6, 10, 8], 6, 13));

//More Optimised solution:

const find3Numbers = function (arr, n = arr.length, x) {
  let ans = 0;
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === x) {
        ans = 1;
        break;
      } else if (arr[i] + arr[left] + arr[right] >= x) {
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
};

console.log(find3Numbers([1, 4, 45, 6, 10, 8], 6, 13));
