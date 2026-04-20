class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n=nums.length;
        let dp=Array.from({length:n},()=>Array(n).fill(-1));
        // fn return LIS from idx
        function fn(idx,prev_idx){
            if(idx===n) return 0;
            if(dp[idx][prev_idx+1]!==-1) return dp[idx][prev_idx+1];
            // not take: previous idx is same, as we are not taking curr ele
            let len=0+fn(idx+1,prev_idx);
            // take (if condition met)
            if(prev_idx===-1 || nums[idx]>nums[prev_idx]){
                len=Math.max(len, 1+fn(idx+1,idx));
            }
            dp[idx][prev_idx+1]=len;
            return len;
        }
        let res=fn(0,-1);
        return res;
    }
}
