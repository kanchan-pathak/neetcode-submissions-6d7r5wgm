class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n=nums.length;
        let res=[];
        nums.sort((a,b)=>a-b);
        for(let i=0;i<n;i++){
            // skip duplicate first elements of triplet
            // so we skip entire current iteration if 1st ele is same
            if(i>0 && nums[i]===nums[i-1]) continue;
            let target=-(nums[i]);
            let left=i+1;
            let right=n-1;
            while(left<right){
                let sum=nums[left]+nums[right];
                if(sum===target){
                    res.push([-target,nums[left],nums[right]]);
                    // first move pointers
                    left++;
                    right--;
                    // skip duplicates
                    while(left<right && nums[left]===nums[left-1]) left++;
                    while(left<right && nums[right]===nums[right+1]) right--;
                }
                else if(sum>target) right--;
                else left++;
            }
        }
        return res;
    }
}
