class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res=0;
        // 5^5=0 and 0^5=5. we XOR all ele of nums and 1 to n, all will turn 0 except the missing number
        for(let i=1;i<=nums.length;i++){
            res=res^nums[i-1]^i;
        }
        return res

    }
}
