class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // Binary search approach
        // dp is just a temporary array to count how many incr ele we can get
        // we cannot get the right subsequence from this, but we can get the count
        let dp=[nums[0]];
        let LIS=1;
        for(let i=1;i<nums.length;i++){
            if(dp[dp.length-1]<nums[i]){
                dp.push(nums[i]);
                LIS++;
                continue;
            }
            let left=0;
            let right=dp.length-1;
            while(left<right){
                let mid=Math.floor((left+right)/2);
                // if you are greater than me, then we move search space to right
                if(dp[mid]<nums[i]){
                    left=mid+1;
                }
                // if you are not greater than we move to left
                else{
                    right=mid
                }
            }
            dp[left]=nums[i]
        }
        return LIS;
    }
}
