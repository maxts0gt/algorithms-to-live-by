nums = [12,345,2,6,7896]

let findNumbers = function(nums) {
        let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (String(nums[i]).length % 2 === 0) {
            count++

        }
    }
return count
};

a = findNumbers(nums)
console.log(a)