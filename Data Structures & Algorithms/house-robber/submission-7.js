class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
    let n = nums.length;
    if(n===1) return nums[0];
    // dp reps the highest amount that can be robbed till now/curr idx
    let dp = Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for (let i = 2; i < n + 1; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[n-1]
    }
}
