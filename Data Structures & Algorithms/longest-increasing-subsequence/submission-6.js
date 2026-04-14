class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n=nums.length;
        let memo=Array(n).fill(-1);
        // fn defines the LIS you can make starting from index i
        function fn(i){
            // because we call from boundary controlled for loops we dotn need base case
            if(memo[i]!==-1) return memo[i];
            let ans=1; //if we select only nums[i]
            for(let j=i+1;j<n;j++){
                //pick all possible future elements (pick unpick so on)
                if(nums[j]>nums[i]){
                ans=Math.max(ans,1+fn(j))
                }
            }
            memo[i]=ans;
            return ans;
        }
        let res=1;
        // so memo[i] stores the LIS possible from i
        // so we need to iterate
        for(let i=0;i<n;i++){
            res=Math.max(res,fn(i));
        }
        return res;
    }
}
