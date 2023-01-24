/**Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first letter of each string in the array.
 *
 *
 * Thinking Solution:
 * we have to take each element in the array and capitalize it's first letter.
 * ip-arr
 * op-arr
 *
 * example: capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']*/

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  }
  let res = capitalizeFirst(arr.slice(0, -1));
  console.log(res);
  res.push(arr.slice(-1)[0][0].toUpperCase() + arr.slice(-1)[0].slice(1));
  return res;
}

console.log(capitalizeFirst(["abc", "bac", "cab", "bcsa"]));

// function
