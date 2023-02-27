const subArrExists = function (arr, n = arr.length) {
  let sum = 0;
  let m = new Map();
  if (arr[0] === 0) return true;
  m.set(arr[0], 0);
  for (let i = 1; i < n; i++) {
    if (arr[i] === 0) {
      return true;
    }
    sum = arr[i - 1];
    arr[i] += sum;
    if (m.has(arr[i]) || arr[i] === 0) {
      return true;
    }
    m.set(arr[i], i);
  }
  return false;
};

console.log(subArrExists([4, 2, -3, 1, 6]));
// console.log(subArrExists([4, 2, 3, 45, 1, 3]));
