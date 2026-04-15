class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        //bottom up
        let dp=Array.from({length:m},()=>Array(n).fill(null));
        //base case
        dp[m-1][n-1]=1;
        for(let i=m-1;i>=0;i--){
            for(let j=n-1;j>=0;j--){
                if(i===m-1 && j===n-1) continue;
                let right;
                let down;
                if(i+1<m) right=dp[i+1][j];
                //if out of bounds set to 0;
                else right=0;
                if(j+1<n) down=dp[i][j+1];
                else down=0;
                dp[i][j]=right+down;
            }
        }
        return dp[0][0];
    }
}
