class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashSet=new Set();
        for(let i=0;i<nums.length;i++){
            if(hashSet.has(nums[i])) return true;
            hashSet.add(nums[i]);
        }
        return false;
    }
}
