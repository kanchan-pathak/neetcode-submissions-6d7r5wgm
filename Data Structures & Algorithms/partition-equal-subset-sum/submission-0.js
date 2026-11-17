class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((acc, ele) => acc + ele, 0);
        if (sum % 2 !== 0) return false;
        let target = sum / 2;
        let n = nums.length;
        // dp defn: dp[i][j] => can we form sum j from the first i elements (all i ele can be taken or not taken)
        let dp = Array.from({ length: n + 1 }, () =>
            Array.from({ length: target + 1 }, () => null),
        );
        //initialise. we can form sum 0 from any number of elements (by not taking all)
        for (let i = 0; i <= n; i++) {
            dp[i][0] = true;
        }
        // we cannot form positive sum using no elements
        for (let i = 1; i <= target; i++) {
            dp[0][i] = false;
        }
        for(let i=1;i<=n;i++){
            for(let j=1;j<=target;j++){
                // we can take or not take current element (nums[i-1] 0 based index )
                // if we don't take can we form current smaller target (j) from previous i-1
                //elements?
                // if we take can we form (current sum target - curr ele val ) sum from prev i-1
                //elements?  
                // current sum target should be greater than the curr element for positive
                //difference
                dp[i][j]=dp[i-1][j]||((j>=nums[i-1])&&dp[i-1][j-nums[i-1]]);
            }
        }
        return dp[n][target];
    }
}
