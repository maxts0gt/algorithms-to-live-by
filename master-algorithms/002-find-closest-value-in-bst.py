# Find closest value in Binary Search Tree
# Recursive Algorithm

# --> On Average
# Time O(log(n))
# Space O(log(n))

# --> On Worst
# Time O(n)
# Space O(n)
def find_closest_value_in_bst(tree, target):
    return find_closest_value_in_bst_helper(tree, target, float("inf"))


def find_closest_value_in_bst_helper(tree, target, closest):
    if tree is None:
        return closest
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    if target < tree.value:
        return find_closest_value_in_bst_helper(tree.left, target, closest)
    elif target > tree.value:
        return find_closest_value_in_bst_helper(tree.right, target, closest)
    else:
        return closest

# Iterative Algorithm

# --> On Average
# Time O(log(n))
# Space O(1)

# --> On Worst
# Time O(n)
# Space O(1)


def find_closest_value_in_bst_not_recursive(tree, target):
    return find_closest_value_in_bst_not_recursive_helper(tree, target, float("inf"))


def find_closest_value_in_bst_not_recursive_helper(tree, target, closest):
    current_node = tree
    while current_node is not None:
        if abs(target - closest) > abs(target - current_node.value):
            closest = current_node.value
        if target < current_node.value:
            current_node = current_node.left
        elif target > current_node.value:
            current_node = current_node.right
        else:
            break
    return closest
