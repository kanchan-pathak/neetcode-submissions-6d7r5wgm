class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n=nums.length;
        nums.sort((a,b)=>a-b);
        let res=[];
        for(let i=0;i<n-2;i++){
            if(i>0 && nums[i]===nums[i-1]) continue;
            let target=-(nums[i]);
            let l=i+1,r=n-1;
            while(l<r){
                let sum=nums[l]+nums[r];
                if(sum===target){
                    res.push([nums[i],nums[l],nums[r]]);
                    l++;
                    r--;
                    while(nums[l-1]===nums[l]) l++;
                    while(nums[r+1]===nums[r]) r--;
                }
                else if(sum>target) r--;
                else l++;
            }
        }
        return res;
    }
}
