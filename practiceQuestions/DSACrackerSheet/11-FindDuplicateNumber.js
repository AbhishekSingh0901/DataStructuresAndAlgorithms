//using Nlog(N) TC:
const findDuplicate = function (nums) {
  let n = nums.length - 1;
  //using sort:
  nums.sort((a, b) => a - b);
  console.log(nums);

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }
  return -1;
};
// console.log(findDuplicate([1, 3, 4, 2, 2]));
// console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));

//Optimised Solution: using flyods cycle:

const optimisedFindDuplicate = function (nums) {
  let fast = 0;
  let slow = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];

    if (fast === slow) {
      let pointer = 0;
      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }

      return pointer;
    }
  }
};

console.log(optimisedFindDuplicate([3, 1, 3, 4, 2]));
