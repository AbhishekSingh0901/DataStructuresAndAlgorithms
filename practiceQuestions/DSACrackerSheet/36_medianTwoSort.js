const findMedian = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    i++;
  }
  console.log(result);

  if (result.length % 2 !== 0) {
    return result[Math.floor(result.length / 2)];
  } else {
    let mid = result.length / 2;
    return Math.floor((result[mid - 1] + result[mid]) / 2);
  }
};
console.log(findMedian([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 6, 10]));
