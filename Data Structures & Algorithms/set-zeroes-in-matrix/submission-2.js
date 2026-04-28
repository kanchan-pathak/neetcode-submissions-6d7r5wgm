class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        // boolean vars for first row & col
        let firstRowZero=false,firstColZero=false;
        let m=matrix.length;
        let n=matrix[0].length;
        //checking if first col has zero
        for(let i=0;i<m;i++){
            if(matrix[i][0]===0) {
                firstColZero=true;
                break;
            }
        }
        //checking if first row has zero
        for(let i=0;i<n;i++){
            if(matrix[0][i]===0){
                firstRowZero=true;
                break;
            }
        }
        // now our 1st row/col acts as markers. so we start with (1,1)
        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                if(matrix[i][j]===0){
                    matrix[i][0]=0; //1st col is row marker
                    matrix[0][j]=0; //1st row is col marker
                }
            }
        }
        // now we set entire row/col to 0 if marker says 0
        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                if(matrix[i][0]===0 || matrix[0][j]===0){
                    matrix[i][j]=0; //set ele to 0
                }
            }
        }
        //set first row to zero if an ele is 0
        if(firstRowZero){
            for(let i=0;i<n;i++){
                matrix[0][i]=0;
            }
        }
        //set entire first col to 0 if ele 0 exists
        if(firstColZero){
            for(let i=0;i<m;i++){
                matrix[i][0]=0;
            }
        }
    }
}
