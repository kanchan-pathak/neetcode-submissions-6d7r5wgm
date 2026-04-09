class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n=nums.length;
        // dp reps the highest amount that can be robbed till now/curr idx
        let dp=Array(n+1).fill(0);
        // dp[0] no houses robbed till now
        dp[0]=0;
        // dp[1] after first house, max we can rob is first house val
        dp[1]=nums[0];
        for(let i=2;i<n+1;i++){
            // i-1 because dp has one extra spot at front
            dp[i]=Math.max(dp[i-2]+nums[i-1], dp[i-1]);
        }
        return dp[n]
    }
}
