//Vimp
//find largest sum contagious Subarray:

// brute force: o(n^2)
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

//kadens o(n)
function maxSumarrKadens(nums) {
  let sol = nums[0];
  // console.log(sol);
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    // console.log(nums[i]);
    sol = Math.max(sol, nums[i]);
    // console.log(sol);
  }
  return sol;
}

console.log(maxSumarr([1, 2, 3, -2, 5]));
console.log(maxSumarr([-1, -2, -3, -2, -5]));
console.log(maxSumarr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(maxSumarrKadens([1, 2, 3, -2, 5]));
console.log(maxSumarrKadens([-1, -2, -3, -2, -5]));
console.log(maxSumarrKadens([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
