# Time O(n^2)
# Space O(1)
def twoNumberSum(array, target_sum):
    for i in range(len(array) - 1):
        first_num = array[i]
        for j in range(i + 1, len(array)):
            second_num = array[j]
            if first_num + second_num == target_sum:
                return [first_num, second_num]
    return []


# Hashed Table
# Time O(n)
# Space O(n)
def twoNumberSumHashed(array, target_sum):
    nums = {}
    for num in array:
        potential_match = target_sum - num
        if potential_match in nums:
            return nums[potential_match, num]
        else:
            nums[num] = True
    return []


# Time O(nlog(n))
# Space O(1)
def twoNumberSumLR(array, target_sum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        current_sum = array[left] + array[right]
        if current_sum == target_sum:
            return [array[left], array[right]]
        elif current_sum < target_sum:
            left += 1
        elif current_sum > target_sum:
            right -= 1
    return []
