/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        //combine in twos, them combine with other results
        // [(l1+l2)+(l3+l4)]+[(l5+l6)+(l7+l8)]
        //edge case handling
        if(lists.length===0) return null;
        //so we iterate lists, because will keep reducing the no. of lists (by merging) 
        while(lists.length>1){
            let merged=[]
            for(let i=0;i<lists.length;i+=2){
                let l1=lists[i];
                let l2=(i+1<lists.length)? lists[i+1]:null;
                merged.push(mergeTwoLists(l1,l2));
            }
            // assigning the reduced+merged lists to main lists variable
            lists=merged;
        }
        function mergeTwoLists(l1,l2){
            let dummy=new ListNode();
            let curr=dummy;
            while(l1!==null && l2!==null){
                if(l2.val>l1.val){
                    curr.next=l1;
                    l1=l1.next;
                }
                else{
                    curr.next=l2;
                    l2=l2.next;
                }
                curr=curr.next;
            }
            curr.next=l1||l2;
            return dummy.next
        }
        // even if n is 1, we get first list
        return lists[0];
    }
}
