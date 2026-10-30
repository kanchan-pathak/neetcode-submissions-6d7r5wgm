class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n=nums.length;
        if(n===1) return nums[0];
        let dpFirst=Array(n+1).fill(0);
        let dpLast=Array(n+2).fill(0);
        for(let i=n-2;i>=0;i--){
            dpFirst[i]=Math.max(nums[i]+dpFirst[i+2],dpFirst[i+1]);
        }
        //console.log(dpFirst);
        for(let i=n-1;i>=1;i--){
            dpLast[i]=Math.max(nums[i]+dpLast[i+2],dpLast[i+1]);
        }
        //console.log(dpLast);
        let res=Math.max(dpFirst[0],dpLast[1]);
        return res;
    }
}
