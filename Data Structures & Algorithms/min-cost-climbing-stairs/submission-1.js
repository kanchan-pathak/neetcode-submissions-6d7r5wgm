class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n=cost.length;
        //dp tells us how much cost paid to step to current idx i from base stair
        let dp=Array(n+1).fill(0);
        //we can reach 0 and 1th idx free of cost
        dp[0]=0;
        dp[1]=0;
        for(let i=2;i<=n;i++){
            // minimum among: 1) the cost to reach i-1 summed with 
            // "cost of taking a step 'from' the i-1th floor"
            // 2)the cost to reach i-2 summed with 
            // "cost of taking a step 'from' the i-2th floor"
            dp[i]=Math.min(cost[i-1]+dp[i-1],cost[i-2]+dp[i-2]);
        }
        return dp[n];
    }
}
