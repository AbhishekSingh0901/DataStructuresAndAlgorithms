function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }

    arr[j + 1] = curVal;
  }
  return arr;
}

console.log(insertionSort([4, 3, 5, 6, 1, 9, 0]));
