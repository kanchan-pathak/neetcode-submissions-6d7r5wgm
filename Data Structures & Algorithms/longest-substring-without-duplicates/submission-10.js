class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding window
        let l=0,r=0;
        let n=s.length;
        let resLen=0;
        // more optimal approach: to use hashmap where key is char and val is last found idx
        let hashMap=new Map();
        while(r<n){
            // when we find duplicate which is inside the window
            // shrink window by moving left ptr to last seen idx +1
            if(hashMap.has(s[r]) && hashMap.get(s[r])>=l){
                l=hashMap.get(s[r])+1;
            }
            hashMap.set(s[r],r);
            let count=r-l+1;
            resLen=Math.max(count,resLen);
            //keep growing window
            r++;
        }
        return resLen;
    }
}
