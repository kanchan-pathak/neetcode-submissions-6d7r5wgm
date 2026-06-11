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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function sameTree(p,q){
            let queue=[[p,q]];
            while(queue.length!==0){
                let [curr1,curr2]=queue.shift();
                if(!curr1 && !curr2) continue;
                if(!curr1 || !curr2) return false;
                if(curr1.val!==curr2.val) return false;
                queue.push([curr1.left,curr2.left]);
                queue.push([curr1.right,curr2.right]);
            }
            return true;
        }
        let mainqueue=[root];
        while(mainqueue.length!==0){
            let curr=mainqueue.shift();
            if(curr.val===subRoot.val && sameTree(curr,subRoot)) return true;
            if(curr.left) mainqueue.push(curr.left);
            if(curr.right) mainqueue.push(curr.right);
        }
        return false;
        
    }
}
