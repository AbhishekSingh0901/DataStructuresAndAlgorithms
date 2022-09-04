/*Question: implement a fuinction called countUniqueValues, which
accepts a sorted array, and counts the uniques values in the array,
There can negative numbers in the array, but it will always be sorted*/

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  let j;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 12]);
