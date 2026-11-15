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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(!p && !q) return true;
        if(!p || !q) return false;
        // store together
        let queue=[[p,q]];
        while(queue.length!==0){
            let [curr1,curr2]=queue.shift();
            // three cases
            if(!curr1 && !curr2) continue;
            else if(!curr1 || !curr2) return false;
            if(curr1.val !== curr2.val) return false;
            queue.push([curr1.left,curr2.left]);
            queue.push([curr1.right,curr2.right]);
        }
        return true;
       
    }
}
