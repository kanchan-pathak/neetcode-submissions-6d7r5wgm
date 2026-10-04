class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let n=s.length;
        let totalCount=0;
        function expand(l,r){
            let count=0;
            while(l>=0 && r<n && s[l]===s[r]){
                count+=1
                l-=1;
                r+=1;
            }
            return count;
        }
        for(let i=0;i<n;i++){
            let evenCount=expand(i,i);
            let oddCount=expand(i,i+1);
            totalCount=totalCount+evenCount+oddCount;
        }
        return totalCount;
    }
}
