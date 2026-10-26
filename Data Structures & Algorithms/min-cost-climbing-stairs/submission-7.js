class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n=cost.length;
        //curr tells us how much cost paid to step to current idx i from base stair
        //we can reach 0 and 1th idx free of cost
        let prev2=0;//dp[0]=0
        let prev1=0;//dp[1]=0;
        for(let i=2;i<=n;i++){
            // minimum among: 1) the cost to reach i-1 summed with 
            // "cost of taking a step 'from' the i-1th floor"
            // 2)the cost to reach i-2 summed with 
            // "cost of taking a step 'from' the i-2th floor"
            let curr=Math.min(cost[i-1]+prev1,cost[i-2]+prev2);
            prev2=prev1;
            prev1=curr;
        }
        return prev1;
    }
}
