class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let reachableIdx = nums.length - 1;

        for (let i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= reachableIdx) {
                reachableIdx = i;
            }
        }

        return reachableIdx === 0;
    }
}
