class TrieNode{
    constructor(){
        this.arr=Array(26).fill(null);
        this.isWord=false;
        this.word="";
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
        curr.isWord=true;
        curr.word=word;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let prefixtree=new PrefixTree();
        let result=[];
        let m=board.length;
        let n=board[0].length;
        const dirs=[[0,1],[1,0],[0,-1],[-1,0]];
        for(let word of words){
            prefixtree.insert(word);
        }
        function dfs(i,j,currNode){
            let ch=board[i][j];
            const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (currNode.arr[idx] === null) {
                return;
            }
            let nextNode = currNode.arr[idx];
            // found a word
            if (nextNode.isWord) {
                result.push(nextNode.word);
                nextNode.isWord = false; // avoid duplicates
            }
            board[i][j] = '#'; // mark visited
            for (const [dx, dy] of dirs) {
                const ni = i + dx, nj = j + dy;
                if (ni >= 0 && nj >= 0 && ni < m && nj < n && board[ni][nj] !== '#') {
                    dfs(ni, nj, nextNode);
                }
            }
            board[i][j] = ch; // backtrack
        }
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                const idx = board[i][j].charCodeAt(0) - 97;
                if (prefixtree.root.arr[idx] !== null) {
                    dfs(i, j, prefixtree.root);
                }

            }
        }
        return result;
    }
}
