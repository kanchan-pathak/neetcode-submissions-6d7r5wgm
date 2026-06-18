class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let nr=grid.length
        let nc=grid[0].length
        let dir=[[0,1],[0,-1],[1,0],[-1,0]]
        let maxArea=0
        function bfs(r,c){
            let queue=[[r,c]]
            grid[r][c]=0
            let count=1
            while(queue.length!==0){
                let [row,col]=queue.shift()
                //console.log("row and col ",row,col)
                for(let [dr,dc]of dir){
                    let newRow=dr+row
                    let newCol=dc+col
                    if(newRow>=0 
                    && newRow<nr 
                    && newCol>=0 
                    && newCol<nc 
                    && grid[newRow][newCol]===1)
                    {
                        count++
                        //console.log("count",count)
                        grid[newRow][newCol]=0
                        queue.push([newRow,newCol])
                       
                    }
                }
            }
            return count
        }
        for(let i=0;i<nr;i++){
            for(let j=0;j<nc;j++){
                if(grid[i][j]===1){
                    let area=bfs(i,j)
                    maxArea=Math.max(maxArea,area)
                }
                
            }
        }
        return maxArea
    }
}
