class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let m=matrix.length
        let n=matrix[0].length
        let top=0,bottom=m-1,left=0,right=n-1;
        let res=[]
        while(top<=bottom && left<=right){
            //Left to right. keep row constant.
            //no need checks because the while condition already checked it for us.
            for(let i=left;i<=right;i++){
                res.push(matrix[top][i]);
            }
            top+=1;
            // Up to down. keep col constant
            //similarly no need of checks
            for(let i=top;i<=bottom;i++){
                res.push(matrix[i][right]);
            }
            right-=1;
            //recheck as top changes
            if(top<=bottom){
            // right to left
            for(let i=right;i>=left;i--){
                res.push(matrix[bottom][i]);
            }
            bottom-=1;
            }
            //recheck as right changes
            if(left<=right){
            // Down to Up
            for(let i=bottom;i>=top;i--){
                res.push(matrix[i][left]);
            }
            left+=1;
            }
        }
        return res;
    }
}
