function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (num === arr[middle]) {
      return middle;
    } else if (num > arr[middle]) {
      left = middle + 1;
    } else if (num < arr[middle]) {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 39, 48, 54], 23));
