class TrieNode{
    constructor(){
        this.arr=Array(26).fill(null);
        this.isEnd=false;
    }
}
class PrefixTree {
    constructor() {
        this.root=new TrieNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr=this.root;
        for(let i=0;i<word.length;i++){
            let idx=word.charCodeAt(i)-'a'.charCodeAt(0);
            // important don't flip logic in condition
            if(curr.arr[idx]===null) curr.arr[idx]=new TrieNode();
            curr=curr.arr[idx];
        }
        curr.isEnd=true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr=this.root;
        for(let i=0;i<word.length;i++){
            let idx=word.charCodeAt(i)-'a'.charCodeAt(0);
            if(curr.arr[idx]===null) return false;
            curr=curr.arr[idx];
        }
        return curr.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr=this.root;
        for(let i=0;i<prefix.length;i++){
            let idx=prefix.charCodeAt(i)-'a'.charCodeAt(0);
            if(curr.arr[idx]===null) return false;
            curr=curr.arr[idx];
        }
        return true;
    }
}
