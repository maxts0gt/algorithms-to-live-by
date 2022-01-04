
# Product Sum

# Time O(n)
# Space O(depth)

def product_sum(array, multiplier=1):
    # We initially start with sum of 0 and multiplier default with 1
    sum = 0
    # For element in array
    for element in array:
        # if element is list
        if type(element) is list:
            # we call the recursive function with multiplier + 1
            # there could list inside the list as well
            # 1 will added to whenever there is a multiplier
            sum += product_sum(element, multiplier + 1)
        else:
            # if there is not we simply add it to the sum
            sum += element
        # after adding all of it, we multiply with 1
    return sum * multiplier
