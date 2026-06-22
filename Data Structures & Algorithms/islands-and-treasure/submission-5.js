class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows=grid.length
        let cols=grid[0].length
        let dir=[[1,0],[-1,0],[0,1],[0,-1]]
        let q=[]
        let visit=new Set()

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j]===0){
                    q.push([i,j])
                    visit.add(i+','+j)
                }
            }
        }
        let dist=0
        while(q.length!==0){
            for(let i=q.length;i>0;i--){
                let [r,c]=q.shift()
                if(grid[r][c]!==0){
                    grid[r][c]=dist
                }
                for(let [dr,dc] of dir){
                    let nr=r+dr
                    let nc=c+dc
                    if(
                        nr>=0 &&
                        nr<rows &&
                        nc>=0 &&
                        nc<cols &&
                        !visit.has(nr+','+nc) &&
                        grid[nr][nc]!==-1
                    ){
                        q.push([nr,nc])
                        visit.add(nr+','+nc)
                    }
                }
            }
            dist++
        }
        return grid
    }
}
