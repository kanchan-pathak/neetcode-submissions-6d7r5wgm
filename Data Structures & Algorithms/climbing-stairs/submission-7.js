class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //bottom up
        let dp=Array(n+1).fill(null);
        //dp defines the num of ways to reach curr idx (i) from 0th idx
        dp[0]=1;
        dp[1]=1
        for(let i=2;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }
        return dp[n];
    }
}
