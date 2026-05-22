class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n=nums.length;
        let l=0,r=n-1;
        // 1) Which side is sorted, after that 2) is traget in sorted side?
        // we use l<r when res converges to one idx of array (surely an ans exists)
        // we use l<=r when we need to search excat value (it might not be present)
        while(l<=r){
            let m=Math.floor((l+r)/2);
            if(nums[m]===target) return m;
            //left side is sorted
            if(nums[l]<=nums[m]){
                // target lies inside sorted side
                if(nums[l]<=target && target<nums[m]){
                    // we have checked if mid us target, so we can discard
                    r=m-1;
                    continue;
                }
                else{
                    l=m+1;
                    continue;
                }
            }
            else{
                if(nums[m]<target && target<=nums[r]){
                    l=m+1;
                    continue;
                }
                else{
                    r=m-1;
                    continue;
                }
            }
        }
        return -1;
    }
}
