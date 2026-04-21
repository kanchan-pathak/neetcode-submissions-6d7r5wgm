class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let n=nums.length
        let dp=Array(n).fill(false);
        dp[n-1]=true;
        for(let i=n-2;i>=0;i--){
            for(let j=nums[i];j>0;j--){
                if(dp[i+j]){
                dp[i]=true;
                continue;
            }
            }
        }
        return dp[0];
    }
}
