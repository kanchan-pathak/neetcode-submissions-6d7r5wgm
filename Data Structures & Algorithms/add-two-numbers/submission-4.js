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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy=new ListNode();
        let curr=dummy;
        let carry=0;
        while(l1 || l2 || carry ){
            let l1_val=l1?l1.val:0;
            let l2_val=l2?l2.val:0;
            let sum=l1_val+l2_val+carry;
            curr.next=new ListNode(sum%10);
            console.log(curr.next)
            carry=Math.floor(sum/10);
            curr=curr.next;
            if(l1) l1=l1.next;
            if(l2) l2=l2.next;
        }
        return dummy.next;
    }
}
