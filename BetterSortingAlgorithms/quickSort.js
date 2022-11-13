//Pivot helper

function pivotHelper(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      // console.log(arr);
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  // console.log(arr);
  return swapIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
