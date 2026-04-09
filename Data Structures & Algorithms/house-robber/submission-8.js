class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
    let n = nums.length;
    if(n===1) return nums[0];
    //dp[0] = nums[0];
    let prev2=nums[0];
    let prev1= Math.max(nums[0],nums[1]); //dp[1]
    for (let i = 2; i < n; i++) {
        let curr = Math.max(prev2 + nums[i], prev1);
        prev2=prev1;
        prev1=curr;
    }
    return prev1;
    }
}
