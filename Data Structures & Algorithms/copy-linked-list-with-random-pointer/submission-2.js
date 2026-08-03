// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr=head;
        let nodesMap=new Map();
        while(curr!==null){
            let copyNode=new Node(curr.val);
            nodesMap.set(curr,copyNode);
            curr=curr.next;
        }
        curr=head;
        while(curr!==null){
            let copyNode=nodesMap.get(curr);
            copyNode.next=curr.next?nodesMap.get(curr.next):null;
            copyNode.random=curr.random?nodesMap.get(curr.random):null;
            curr=curr.next;
        }
        return head?nodesMap.get(head):null;
    }
}
