/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
            //if we reach null or if we find p or q
            //in case p is parent of q -> p gets returned from one branch
            //->null returns from another branch (obvio you will not find q there, it'll be under p)
            //so eventually last line returns either left or right (whichever is not null)
            if(!root || root.val===p.val || root.val===q.val){
                return root;
            }
            let left=this.lowestCommonAncestor(root.left,p,q);
            let right=this.lowestCommonAncestor(root.right,p,q);
            //if we have found both p and q in splitted branches,
            //then current node is the LCA
            if(left && right) return root;
            //else return one of them (one is ancestor of other)
            return left? left:right;
    }
}
