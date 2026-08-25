class doublyLLNode {
    constructor(key=0,val=0,prev=null,next=null){
        this.key=key;
        this.val=val;
        this.prev=prev;
        this.next=next;
    }
}
class doublyLL {
    constructor(){
        this.head=new doublyLLNode();
        this.tail=new doublyLLNode();
        this.head.next=this.tail;
        this.tail.prev=this.head;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity=capacity;
        this.hashMap=new Map();
        this.list=new doublyLL();
    }
    remove(node){
        node.prev.next=node.next;
        node.next.prev=node.prev;  
    }
    insertAtTail(node){
        this.list.tail.prev.next=node;
        node.prev=this.list.tail.prev;
        this.list.tail.prev=node;
        node.next=this.list.tail;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hashMap.has(key)){
            let node=this.hashMap.get(key);
            this.remove(node);
            // add to tail side
            this.insertAtTail(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node=null;
        if(this.hashMap.has(key)){
            node=this.hashMap.get(key);
            node.val=value;
            this.remove(node);
        }
        else{
            node=new doublyLLNode(key,value);
            this.hashMap.set(key, node);
        }
        if(this.hashMap.size>this.capacity){
            // eviction
            let lru=this.list.head.next;
            this.remove(lru);
            this.hashMap.delete(lru.key);
        }
        
        // add to tail side
        this.insertAtTail(node);

    }
}
