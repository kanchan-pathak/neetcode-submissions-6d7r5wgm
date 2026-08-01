class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // hash map soln
        let freqMap={}
        let n=nums.length
        let res=[null,null]
        for(let i=0;i<n;i++){
            freqMap[nums[i]]=i
        }
        for(let i=0;i<n;i++){
            if(Object.hasOwn(freqMap,target-nums[i])){
                let j=freqMap[target-nums[i]]
                if(i!==j){
                    res[0]=i
                    res[1]=j
                }
            }
        }
        return res
    }
}
