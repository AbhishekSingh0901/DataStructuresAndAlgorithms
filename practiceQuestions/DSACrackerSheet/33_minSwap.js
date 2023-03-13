const minSwap = function (arr, k, n = arr.length) {
  let count = 0;
  let badNums = 0;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k) {
      count++;
    }
  }

  for (let i = 0; i < count; i++) {
    if (arr[i] > k) {
      ++badNums;
    }
  }
  let start = 0;
  let end = count;
  min = badNums;
  while (end < n) {
    if (arr[start] > k) badNums--;
    if (arr[end] > k) badNums++;
    min = Math.min(min, bad);
    start++;
    end++;
  }
  return ans;
};
