const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let complementPair = target - val;
    if (map[complementPair] === undefined) map[val] = i;
    else return [map[complementPair], i];
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
