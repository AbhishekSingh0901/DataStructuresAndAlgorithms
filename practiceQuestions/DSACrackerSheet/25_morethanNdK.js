//Given Array of size n and a number k, find all elements that appear more than n/k times
// Given an array of size n and an integer k, find all elements in the array that appear more than n/k times.

// Examples:

// Input: arr[] = {3, 1, 2, 2, 1, 2, 3, 3}, k = 4
// Output: {2, 3}
// Explanation: Here n/k is 8/4 = 2, therefore 2 appears 3 times in the array that is greater than 2 and 3 appears 3 times in the array that is greater than 2

// Input: arr[] = {9, 8, 7, 9, 2, 9, 7}, k = 3
// Output: {9}
// Explanation: Here n/k is 7/3 = 2, therefore 9 appears 3 times in the array that is greater than 2.

const moreThanNdK = function (arr, k) {
  let div = arr.length / k;
  const m = {};
  const result = [];
  for (num of arr) {
    m[num] ? ++m[num] : (m[num] = 1);

    if (m[num] > div) {
      result.push(num);
      m[num] = -Infinity;
    }
  }

  return result;
};

console.log(moreThanNdK([3, 1, 2, 2, 1, 2, 3, 3], 4));
console.log(moreThanNdK([9, 8, 7, 9, 2, 9, 7], 4));
