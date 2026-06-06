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
     * @return {void}
     */
    reorderList(head) {
        // divide list to half -> reverse second list -> merge lists
        // 1) find middle
        let fast=head,slow=head;
        while(fast!==null && fast.next!==null){
            slow=slow.next;
            fast=fast.next.next;
        }
        // cut it to half. first list has one more node than second, in odd lists
        let curr=slow.next;
        slow.next=null;
        // 2) reverse second list
        let prev=null;
        while(curr!==null){
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        // 3) merge list
        // head of reversed list
        let second=prev;
        let first=head;
        // as 1st will have atmost only 1 extra node, check only for second list end
        // connect 1st list node to 2nd list, and 2nd list node to the next node of 1st list 
        while(second!==null){
            let temp1=first.next;
            let temp2=second.next;
            first.next=second;
            second.next=temp1;
            first=temp1;
            second=temp2;
        }
        return head;
        
    }
}
