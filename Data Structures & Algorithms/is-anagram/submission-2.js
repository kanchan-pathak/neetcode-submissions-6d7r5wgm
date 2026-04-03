class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //freqT[t[i]-'a']+=1 doesn't work in JS, returns NaN
        // so use charCodeAt. Syntax: string_we_are_working_on.charCodeAt(position/idx)
        // return ascii value
        let freqS=Array(26).fill(0);
        let freqT=Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            freqS[s.charCodeAt(i)-'a'.charCodeAt(0)]+=1;
        }
        for(let i=0;i<t.length;i++){
            freqT[t.charCodeAt(i)-'a'.charCodeAt(0)]+=1;
        }
        for(let i=0;i<26;i++){
            if(freqS[i]!==freqT[i]) return false
        }
        return true
    }
}
