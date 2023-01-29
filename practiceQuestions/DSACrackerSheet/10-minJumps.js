//*Wrong Solution:
// const minJumps = function (arr) {
//   let n = arr.length - 1;
//   let i = 0;
//   let count = 0;
//   while (i < n) {
//     let val = arr[i];
//     i = i + val;
//     count++;
//   }
//   return count;
// };

// console.log(minJumps([1, 4, 3, 2, 6, 7]));
// console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
// console.log(minJumps([1, 4, 5, 3, 4, 1, 3, 1, 2, 1, 5, 2, 6]));
// console.log(minJumps([2, 3, 1, 1, 2, 4, 2, 0, 1, 1]));
