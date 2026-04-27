class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        //in place. 1) transpose matrix and 2) reverse every row
        let n=matrix.length
        // don't double swap. 
        for(let i=0;i<n;i++){
            //only swap above the diagonal
            for(let j=i+1;j<n;j++){
                let temp=matrix[i][j];
                matrix[i][j]=matrix[j][i];
                matrix[j][i]=temp;
            }
        }
        for (let i = 0; i < n; i++) {
            matrix[i].reverse();
        }
 
    }
}
