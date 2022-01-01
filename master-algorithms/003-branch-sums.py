
# Branch Sum Algorithm
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# Time O(n)
# Space O(n)

def branch_sums(root):
    sums = []
    calculate_branch_sums(root, 0, sums)
    return sums


# Branch calculation
def calculate_branch_sums(node, running_sum, sums):
    # If there is no branch, return
    if node is None:
        return
    # New running sum is running sum plus value of the node.
    new_running_sum = running_sum + node.value
    # If branch doesn't have left and right branch, add the sum to the list and return
    if node.left is None and node.right is None:
        sums.append(new_running_sum)
        return

# Calling the function on the leafs (recursive)
    calculate_branch_sums(node.left, new_running_sum, sums)
    calculate_branch_sums(node.right, new_running_sum, sums)
