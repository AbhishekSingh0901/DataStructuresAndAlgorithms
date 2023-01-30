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

//Correct Solution with O(n) TC:
const miniJumps = function (arr) {
  let maxrange = arr[0];
  let steps = arr[0];
  let jump = 1;
  let n = arr.length;
  if (arr.length === 1) return 0;
  else if (arr[0] === 0) return -1;
  else {
    for (let i = 1; i < n; i++) {
      if (i === n - 1) return jump;

      maxrange = Math.max(maxrange, i + arr[i]);
      steps--;

      if (steps === 0) {
        jump++;
        if (i >= maxrange) {
          return -1;
        }

        steps = maxrange - i;
      }
    }
  }
  return -1;
};

console.log(miniJumps([1, 3, 5, 8, 9, 6, 7, 6, 7, 8, 3]));
