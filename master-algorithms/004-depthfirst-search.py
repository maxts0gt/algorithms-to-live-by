
# Depthfirst search

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def add_child(self, name):
        self.children.append(Node(name))


# Time O(vertices + edges)
# Space O(vertices)


    def depthfirst_search(self, array):
        # Append node's name to the array
        array.append(self.name)
        # For every child in the children, call depthfirst_search function on the child
        for child in self.children:
            child.depthfirst_search(array)
        # At last, return the array
        return array
