class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        //we maintain max and min product variables
        //which signify the max and min product that we have encountered until element i(current loop)
        let n=nums.length;
        let maxprod=1;
        let minprod=1;
        // we initialise final result to the maximum number in array
        let finalmax=Math.max(...nums);
        for(let i=0;i<n;i++){
            //edge case
            if(nums[i]===0){
                // resets else rest soln will also be 0
                maxprod=1;
                minprod=1;
                continue;
            }
            //coz it gets changed in next step, will cause issue for minprod calculation
            let oldmaxprod=maxprod;
            maxprod=Math.max(nums[i],maxprod*nums[i],minprod*nums[i]);
            minprod=Math.min(nums[i],oldmaxprod*nums[i],minprod*nums[i]);
            //as its max product of subarray, max prod can be encountered in middle of array, so we save
            if(maxprod>finalmax) finalmax=maxprod;
        }
        return finalmax;
    }
}
