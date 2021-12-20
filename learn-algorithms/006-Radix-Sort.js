// Basically Radix sort sorts the values by the length of the numbers in the array.
// It means that it takes the numbers into 10 buckets by their number value
// [12, 24, 444, 23, 122, 405, 1442, 1689]. For example in this array,
// since we have highest digit of 4 numbers (1689) in the array, we will do bucketing 4 rounds
// all numbers end with "2" go the bucket number 2 in the first round and so on.
// When the numbers go back to the array, they will be sorted in the order
// One of the key to understand this is that bucketing starts from the back
// At the end of 4th round, it will be sorted.

//It has 3 helper functions

// getDigit shows what is the digit.
// If number 1230, and i is 2, then 10 ** 2 == 100 and 1230 / 100 -> 12 % 10 = 2
// which is 2nd index from the back
// If number 1230, and i is 1, then 10 ** 1 == 10 and 1230 / 10 -> 123 % 10 = 3
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//digitCount shows how many digits are in the number
//Basically if number is 9312, it will return Math.floor(3.9123) + 1 which is 4
function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//mostDigits returns the max digits in the number.
//It goes through each returned number of the digitCount and compare the numbers
//bring the highest number.

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

//radixSort basically combines all of them.
//Important part goes to the nums = concat(...digitBuckets) which is easy way of
//making array from the buckets
function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

radixSort([2, 24, 444, 23, 122, 405, 1442, 1689]);
