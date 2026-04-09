class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // Expand around center approach
        // more optimal space solution
        let n=s.length;
        if(n<2) return s;
        let maxLen=0;
        let start=0;
        function expansion(l,r){
            //expand until boundary condition plus palindrome condition (same vals)
            while(l>=0 && r<n && s[l]===s[r]){
                l-=1;
                r+=1;
            }
            //because we stopped after condition mismatch, so calculate oen step back
            // (r-1)+(l+1)-1=r-1-l-1+1=r-l-1
            return r-l-1;
        }
        for(let i=0;i<n;i++){
            let len1=expansion(i,i); //odd palindrome length, single center pt
            let len2=expansion(i,i+1); //even. 2 letter mid pts
            let len=Math.max(len1,len2);
            if(len>maxLen){
                console.log(len)
                console.log("i",i);
                maxLen=len;
                start=i-Math.floor((len-1)/2);
            }
        }
        return s.substring(start,start+maxLen)
    }
}
