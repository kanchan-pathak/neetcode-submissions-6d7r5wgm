class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // top down with memoisation
        let dp=Array.from({length:m},()=>Array(n).fill(null));
        //fn defn: fn(i,j) returns unique path possible from i,j
        function fn(i,j){
            // base case
            if(i>=m || j>=n) return 0;
            if(i===m-1 && j===n-1) return 1;
            //memoisation
            if(dp[i][j]!==null) return dp[i][j];
            //recursion
            dp[i][j]=fn(i+1,j)+fn(i,j+1);
            return dp[i][j];
        }
        let res=fn(0,0);
        return res;
    }
}
