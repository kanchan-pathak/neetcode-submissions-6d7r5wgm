class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        //dp def: max you can rob from i onwards.
        let n=nums.length;
        let dp=Array(n+2).fill(0);
        for(let i=n-1;i>=0;i--){
            dp[i]=Math.max(nums[i]+dp[i+2], dp[i+1]);
        }
        return dp[0];
    }
}
