class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //bottom up + space optimised
        //previous to previous element/dp[0]
        let prev2=1;
        //just previous to curr element dp[1]
        let prev1=1;
        for(let i=2;i<=n;i++){
            //curr defines the num of ways to reach curr idx (i) from 0th idx
            let curr=prev2+prev1;
            prev2=prev1;
            prev1=curr
        }
        return prev1;
    }
}
