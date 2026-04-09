class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) { 
        //bottom up space optimised approach
        let len=nums.length
        // edge case is array is small
        if(len<=1){
            return nums[0]
        }
        if(len===2){
            return Math.max(nums[0],nums[1]);
        }
        // as we cannot take both first and last elements in an annswer
        // we split array into two, one with 1st ele
        // other with last ele. solve it like 2 cases
        // 1) if we had considered first ele what would be our maxsum
        // 2) if we had considered last ele what would be our maxsum
        let nums1=nums.slice(0,len-1)
        let nums2=nums.slice(1,len)
        function maxRob(arr){
            let n=arr.length
            let prev2=arr[0] //i-2
            let prev1=Math.max(arr[0],arr[1]); //i-1
            for(let i=2;i<n;i++){
                let curr=Math.max(arr[i]+prev2,prev1)
                prev2=prev1;
                prev1=curr;
            }
            return prev1;
        }
        let res=Math.max(maxRob(nums1),maxRob(nums2))
        return res

    }
}
