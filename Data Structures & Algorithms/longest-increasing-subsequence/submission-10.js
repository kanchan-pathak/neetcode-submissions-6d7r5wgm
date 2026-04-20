class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n=nums.length;
        //dp defn: dp[i][j] LIS from idx i if prev idx is j-1
        let dp=Array.from({length:n+1},()=>Array(n+1).fill(0));
        for(let i=n-1;i>=0;i--){
            for(let prev_idx=i-1;prev_idx>=-1;prev_idx--){
                let len=dp[i+1][prev_idx+1];
                if(prev_idx===-1 || nums[i]>nums[prev_idx]){
                    len=Math.max(len,1+dp[i+1][i+1]);
                }
                dp[i][prev_idx+1]=len;
            }
        }
        return dp[0][-1+1];
    }
}
