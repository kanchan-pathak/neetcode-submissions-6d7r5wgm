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
     * @return {TreeNode}
     */
    invertTree(root) {
        //bfs
        if(!root) return null;
        // queue
        let q=[root]
        while(q.length>0){
            let curr=q.shift();
            // swap parents first
            let temp=curr.left;
            curr.left=curr.right;
            curr.right=temp;
            //then add children for processing
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        return root;
    }
}
