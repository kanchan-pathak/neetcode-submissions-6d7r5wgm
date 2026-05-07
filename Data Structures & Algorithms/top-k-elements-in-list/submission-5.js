class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //bucket sorting
        let n=nums.length;
        let freqMap=new Map();
        // create frequency map
        for(let i=0;i<n;i++){
            if(freqMap.has(nums[i])){
                freqMap.set(nums[i],freqMap.get(nums[i])+1);
            }
            else{
                freqMap.set(nums[i],1);
            }
        }
        // max times a ele can element is occur the size of array.
        // so the the idx is the number of times it has occurred
        let buckets=Array.from({length:n+1},()=>[])
        freqMap.forEach((value,key)=>{
            buckets[value].push(key);
        })
        // start counting from back to count k freq elements.
        let res=[];
        for(let i=n;i>=0;i--){
            while(buckets[i].length!==0 && res.length<k){
                res.push(buckets[i].pop());
            }
        }
        return res;
    }
}
