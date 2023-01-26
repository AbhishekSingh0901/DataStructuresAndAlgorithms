// JavaScript code for program
// to cyclically rotate an array by one

function rotate(arr, n = arr.length) {
  let x = arr[n - 1],
    i;
  for (i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
  arr[0] = x;
  return arr;
}

console.log(rotate([1, 2, 3, 4, 5]));
