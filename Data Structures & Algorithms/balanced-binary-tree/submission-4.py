# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        def dfs(curr):
            if not curr:
                return 0
            left=dfs(curr.left)
            right=dfs(curr.right)
            print("curr left and right",curr.val,left,right)
            if(left==-1 or right==-1 or abs(left-right)>1):
                return -1
            return max(left,right)+1
        #test case not root=[1,2,2,3,null,null,3,4,null,null,4]
        if dfs(root)==-1:
            return False
        return True