const tappingWater = function (arr, n = arr.length) {
  let left = [];
  left[0] = arr[0];
  let right = [];
  let sum = 0;
  right[n - 1] = arr[n - 1];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(arr[i], left[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(arr[i], right[i + 1]);
  }
  for (let i = 0; i < n; i++) {
    sum += Math.min(left[i], right[i]) - arr[i];
  }
  return sum;
};

tappingWater([3, 0, 0, 2, 0, 4]);
