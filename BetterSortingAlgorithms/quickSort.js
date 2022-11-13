//Pivot helper

function pivotHelper(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = 0;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      console.log(arr);
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]);
