class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let nr=grid.length;
        let nc=grid[0].length;
        let count=0;
        function bfs(i,j){
            grid[i][j]="0";
            let dir=[[0,1],[1,0],[0,-1],[-1,0]];
            let queue=[[i,j]];
            while(queue.length!==0){
                let [r,c]=queue.shift();
                for(let [dr,dc] of dir){
                    let newr=r+dr;
                    let newc=c+dc;
                    if(newr>=0 && newr<nr && newc>=0 && newc<nc && grid[newr][newc]==="1"){
                        // mark before adding to queue to avoid duplicates.
                        grid[newr][newc]="0";
                        queue.push([newr,newc]);
                    }
                }
            }
        }
        for(let i=0;i<nr;i++){
            for(let j=0;j<nc;j++){
                if(grid[i][j]==="1"){
                    count++;
                    bfs(i,j);
                }
            }
        }
        return count;
    }
}
