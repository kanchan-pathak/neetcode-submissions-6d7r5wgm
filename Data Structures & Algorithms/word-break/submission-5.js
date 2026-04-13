class Trie{
    constructor(){
        this.children=Array(26).fill(null);
        this.isWord=false
    }
    buildTree(words){
        //pointing to same trie
        let root=this;
        for(let word of words){
            let curr=root;
            for(let ch of word){
                let idx=ch.charCodeAt(0)-'a'.charCodeAt(0);
                if(!curr.children[idx]){
                    curr.children[idx]=new Trie();
                }
                curr=curr.children[idx];
            }
            curr.isWord=true;
        }

    }
}
    class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let n=s.length;
        let root=new Trie();
        root.buildTree(wordDict);
        //dp definition: dp[i] means can s[0 to i-1] be split into dictionary words.
        let dp=Array(n+1).fill(false);
        //empty string exists in dictionary
        dp[0]=true;
        for(let i=0;i<n;i++){
            // if a word ends at i, the next idx, i+1, is marked as reachable
            // and we have to expand only from these reachable points
            if(!dp[i]) continue;
            let node=root;
            for(let j=i;j<n;j++){
                let idx=s.charCodeAt(j)-'a'.charCodeAt(0);
                if(!node.children[idx]) break;
                node=node.children[idx]
                if(node.isWord){
                    dp[j+1]=true;
                }
                console.log("char dp[j+1]",s[j],dp[j+1])
            }
        }
        return dp[n];
        
    }
}
