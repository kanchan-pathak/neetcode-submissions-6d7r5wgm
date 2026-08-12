class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // remove the spaces, punctuation
        // []- character set, ^ negate condition, a-zA-Z0-9 : The condition, g means all occurences not just first
        let normalisedString=s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"");
        let l=0;
        let r=normalisedString.length-1;
        while(l<=r){
            if(normalisedString[l]!==normalisedString[r]) return false;
            l+=1;
            r-=1;
        }
        return true
    }
}
