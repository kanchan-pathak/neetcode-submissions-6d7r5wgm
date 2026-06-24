class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hashSet=new Set();
        let maxCount=0;
        for(let i=0;i<nums.length;i++){
            hashSet.add(nums[i]);
        }
        //loop on set to avoid tle
        for(let num of hashSet){
            // if this is 1st ele of seq (prune efforts)
            if(!hashSet.has(num-1)){
                let curr=num;
                let count=0;
                while(hashSet.has(curr)){
                    curr++;
                    count++;
                }
                maxCount=Math.max(maxCount,count);
            }
        }
        return maxCount;

    }
}
