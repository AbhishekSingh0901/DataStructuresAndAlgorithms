const isSubset = function (arr1, arr2) {
  const mynums = {};
  for (let num of arr1) {
    mynums[num] ? ++mynums[num] : (mynums[num] = 1);
  }
  for (let num of arr2) {
    if (!mynums[num]) {
      return false;
    } else {
      --mynums[num];
    }
  }
  return true;
};

console.log(isSubset([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 1]));
