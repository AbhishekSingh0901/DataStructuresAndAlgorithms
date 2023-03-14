const findMedian = (arr, n = arr.length) => {
  arr.sort((a, b) => a - b);

  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    let mid = arr.length / 2;
    return Math.floor((arr[mid - 1] + arr[mid]) / 2);
  }
};

// console.log(findMedian([]));
