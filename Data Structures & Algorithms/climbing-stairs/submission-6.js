class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //bottom up
        let dp=Array(n+2).fill(null);
        //dp defines the num of ways to reach end from curr step
        dp[n+1]=0
        dp[n]=1
        for(let i=n-1;i>=0;i--){
            dp[i]=dp[i+1]+dp[i+2];
        }
        return dp[0];
    }
}
