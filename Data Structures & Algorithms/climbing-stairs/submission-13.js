class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // dp means number of ways to reach step i from start
        let dp=Array(n+1).fill(0);
        // 1 way to reach 0 -> by starting from 0
        dp[0]=1;
        dp[1]=1;
        for(let i=2;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }
        return dp[n];
    }
}
