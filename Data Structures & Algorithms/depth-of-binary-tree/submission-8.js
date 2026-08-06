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
     * @return {number}
     */
    maxDepth(root) {
        //edge case/ empty case
        if(!root) return 0;
        let q=[root];
        let level=0
        while(q.length>0){
            let n=q.length;
            for(let i=0;i<n;i++){
                let curr=q.shift();
                if(curr.left) q.push(curr.left);
                if(curr.right) q.push(curr.right);
            }
            level+=1
        }
        return level;
    }
}
