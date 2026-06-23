class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n=nums.length;
        let res=Array(n).fill(1);
        let pre=1;
        // calculating prefix peoduct. how much product is accumulated step by step.
        for(let i=0;i<n;i++){
            res[i]=pre;
            pre*=nums[i];
        }
        let post=1;
        //postfix product
        for(let i=n-1;i>=0;i--){
            res[i]*=post;
            post*=nums[i];
        }
        return res
    }
}
