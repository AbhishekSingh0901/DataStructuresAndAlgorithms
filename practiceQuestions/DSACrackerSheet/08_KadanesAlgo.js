//Vimp
//find largest sum contagious Subarray:

// brute force
function maxSumarr(nums) {
  let maxsum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxsum) {
        maxsum = sum;
      }
    }
  }
  return maxsum;
}

console.log(maxSumarr([1, 2, 3, -2, 5]));
console.log(maxSumarr([-1, -2, -3, -2, -5]));
console.log(maxSumarr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
