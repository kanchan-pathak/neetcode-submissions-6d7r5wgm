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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr=head;
        let total=0;
        while(curr!==null){
            total++;
            curr=curr.next;
        }
        
        let pos=total-n;
        if(pos===0) return head.next
        curr=head;
        let prev=head;
        let count=0;
        while(count!==pos){
            count++;
            prev=curr;
            curr=curr.next;
        }

        prev.next=prev.next===null?null:prev.next.next;
        return head
    }
}
