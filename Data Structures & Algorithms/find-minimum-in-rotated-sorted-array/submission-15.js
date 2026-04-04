class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // we check which is the unsorted part and try to search our min there
        let n=nums.length;
        let l=0, r=n-1;
        while(l<r){
            let m=Math.floor((l+r)/2);
            // checking if min is in right side
            if(nums[m]>nums[r]){
                //as nums[m] is greater we can discard idx 'm'
                l=m+1;
                continue;
            }
            // checking if in left side including mid
            else{
                r=m;
                continue;
            }
        }
        return nums[l];
    }
}
