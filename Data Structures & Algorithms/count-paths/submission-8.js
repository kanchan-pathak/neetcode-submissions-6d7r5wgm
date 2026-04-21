class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // bottom up
        let dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
        //dp defn: dp[i][j] returns unique path possible from i,j
        //base case
        dp[m-1][n-1]=1;
        for(let i=m-1;i>=0;i--){
            for(let j=n-1;j>=0;j--){
                if(i===m-1 && j===n-1) continue;
                dp[i][j]=dp[i+1][j]+dp[i][j+1]
            }
        }
        return dp[0][0];
    }
}
