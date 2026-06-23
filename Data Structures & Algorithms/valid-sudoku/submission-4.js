class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m=board.length;
        let n=board[0].length;
        let rowSet=Array.from({length:m},()=>new Set());
        let colSet=Array.from({length:n},()=>new Set());
        let gridSet=Array.from({length:9},()=>new Set());
        console.log()
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                let ch=board[i][j];
                if(ch==='.'){
                    continue;
                }
                if(rowSet[i].has(ch)) return false;
                rowSet[i].add(ch);
                if(colSet[j].has(ch)) return false;
                colSet[j].add(ch);
                let boxnum=Math.floor(i/3)*3+Math.floor(j/3);
                if(gridSet[boxnum].has(ch)) return false;
                gridSet[boxnum].add(ch);
            }
        }
        return true;
    }
}
