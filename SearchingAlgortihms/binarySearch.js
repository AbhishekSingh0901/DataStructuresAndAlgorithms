function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (num === arr[middle]) {
      return middle;
    } else if (num > arr[middle]) {
      left = middle + 1;
    } else if (num < arr[middle]) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
}
