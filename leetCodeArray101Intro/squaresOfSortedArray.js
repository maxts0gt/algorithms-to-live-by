nums = [-7,-3,2,3,11]

const sortedSquares = function (nums) {
    const arr = []
    for (let i = 0; i < nums.length; i++) {
        let squared = nums[i] ** 2
        arr.push(squared)
    }
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr
};



a = sortedSquares(nums)
console.log(a)
