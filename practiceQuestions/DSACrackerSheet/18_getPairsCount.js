const getPairsCount = function (arr, n = arr.length, sum) {
  let count = 0;
  let m = new Map();
  for (let i = 0; i < n; i++) {
    let diff = sum - arr[i];
    if (m.has(diff)) {
      count += m.get(diff);
    }
    m.has(arr[i]) ? m.set(arr[i], m.get(arr[i]) + 1) : m.set(arr[i], 1);
  }
  return count;
};
console.log(getPairsCount([1, 5, 1, 6], 4, 6));
