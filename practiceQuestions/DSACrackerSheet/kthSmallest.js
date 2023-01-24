//TC - NlogN
function kthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

//using quick sort
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

function kthSmallestQuick(arr, k) {
  let array = arr;
  array = quickSort(array);
  return array[k - 1];
}

console.log(kthSmallestQuick([7, 10, 4, 3, 20, 15], 3));
