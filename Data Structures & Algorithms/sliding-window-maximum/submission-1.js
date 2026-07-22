class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const heap = new MaxPriorityQueue((x) => x[0]);        
        let n=nums.length;
        let res=[];
        //initial window
        for(let i=0;i<k;i++){
            heap.enqueue([nums[i],i]);
        }
        res.push(heap.front()[0]);
        let l=1,r=k;
        while(r<n){
            heap.enqueue([nums[r],r]);
            while(heap.front()[1]<l){
                heap.dequeue();
            }
            res.push(heap.front()[0]);
            //coz we processed l=0 previously
            // our r and l both move together keeping window size intact
            l++;
            r++;
        }
        return res;
    }
} 
