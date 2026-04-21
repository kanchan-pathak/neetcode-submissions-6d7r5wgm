class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // we have a running sum, whenever it gets less than 0, we start subarray from next element
        let mxsum=-Infinity
        let sum=0
        let n=nums.length
        for(let i=0;i<n;i++){
            sum+=nums[i]
            if(sum>mxsum) mxsum=sum
            if(sum<0){
                sum=0
            }
        }
        return mxsum
    }
}
