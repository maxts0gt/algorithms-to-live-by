const nums = [1, 3, 7, 9, 2];
const target = 11
const findTwoSum = function(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberTofind = target - nums[p1]
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberTofind === nums[p2]) {
        return [p1, p2]
      }
    }
  }
}

findTwoSum(nums, target)