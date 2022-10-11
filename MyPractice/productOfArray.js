//My solution
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let num = arr.pop();
  return num * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 4]));
