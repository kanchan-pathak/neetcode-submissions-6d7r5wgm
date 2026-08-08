# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.res=0

        #to calculate height
        #same code as "max depth of tree"
        def dfs(curr):
            if not curr:
                return 0
            left=dfs(curr.left)
            right=dfs(curr.right)
            #below one is extra line for this qn
            #which calculates the diameter, as in longest path.
            #from left end to right end
            self.res=max(self.res,left+right)
            return 1+max(left,right)
        dfs(root)

        return self.res
        