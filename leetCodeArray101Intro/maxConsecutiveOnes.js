let nums = [1,1,0,1,1,1]


let findMaxConsecutiveOnes = function(nums) {
    let maxNum = 0
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===1){
            counter++
            maxNum = Math.max(maxNum, counter)
        } else {
            counter = 0
        }

    }
    return maxNum
};

a = findMaxConsecutiveOnes(nums)

console.log(a)