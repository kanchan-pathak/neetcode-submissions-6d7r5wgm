class TrieNode{
    constructor(){
        this.children=Array(26).fill(null);
        this.isEnd=false;
        }
}
class WordDictionary {
    constructor() {
        this.root=new TrieNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr=this.root;
        for(let i=0;i<word.length;i++){
            let idx=word.charCodeAt(i)-'a'.charCodeAt(0);
            if(curr.children[idx]===null) curr.children[idx]=new TrieNode();
            curr=curr.children[idx] 
        }
        curr.isEnd=true;
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        //dfs cause we need to explore all branching and backtrack.
        // dfs fn defn: can we match the word starting from idx, from this node?
        // node is the curr node we are at, idx is the index at word search
        function dfs(node,idx){
            //base case when all of word length is over. 
            if(idx===word.length) return node.isEnd;
            // if current char is '.':
            if(word[idx]==="."){
                //   try all children
                for(let j=0;j<26;j++){
                    if(node.children[j]!==null){
                        //if any dfs(child, idx+1) is true, return true
                        if(dfs(node.children[j],idx+1)) return true;
                    }
                }
                // tried all children, no matching word
                return false
            }
            // if normal char:
            let index=word.charCodeAt(idx)-'a'.charCodeAt(0);
            // if child doesn't exist, one char of search word doesn't exist
            if(node.children[index]===null) return false;
            // keep going further
            // dfs function should always return something.
            return dfs(node.children[index],idx+1);
        }
        return dfs(this.root,0);
    }
}
