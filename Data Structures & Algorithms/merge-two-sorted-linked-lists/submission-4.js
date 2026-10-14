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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1=list1,curr2=list2;
        let head=new ListNode();
        let newcurr=head;
        while(curr1 && curr2){
            if(curr1.val>curr2.val){
                newcurr.next=curr2;
                curr2=curr2.next;
            }
            else{
                newcurr.next=curr1;
                curr1=curr1.next;
            }
            newcurr=newcurr.next;
        }
        while(curr1){
            newcurr.next=curr1
            newcurr=newcurr.next;
            curr1=curr1.next;
        }
        while(curr2){
            newcurr.next=curr2
            newcurr=newcurr.next;
            curr2=curr2.next;
        }
        return head.next;

    }
}
