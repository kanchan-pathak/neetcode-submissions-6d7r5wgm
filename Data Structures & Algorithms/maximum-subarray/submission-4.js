class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // dp approach
        let n=nums.length;
        // dp[i] max sum subarr ending at i
        let dp=Array(n).fill(null);
        //base case
        dp[0]=nums[0];
        // as its a subarray problem soln can be anywhere, nit necesaarily at end, so we need a tracker var
        let mxsum=Math.max(...nums);
        for(let i=1;i<n;i++){
            // is continuing the prev subarr beneficial or starting new
            dp[i]=Math.max(dp[i-1]+nums[i],nums[i]);
            if(dp[i]>mxsum) mxsum=dp[i];
        }
        return mxsum;
    }
}
