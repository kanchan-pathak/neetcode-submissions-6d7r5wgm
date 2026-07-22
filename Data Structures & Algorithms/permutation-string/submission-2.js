class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let m=s1.length;
        let n=s2.length;
        if(m>n) return false;
        let freqA=Array(26).fill(0);
        let freqB=Array(26).fill(0);
        for(let c of s1){
            freqA[c.charCodeAt(0)-'a'.charCodeAt(0)]+=1;
        }
        let freqStrA=freqA.join("#");
        let l=0,r=0;
        while(l<=r && r<n){
            let ch=s2.charCodeAt(r)-'a'.charCodeAt(0);
            freqB[ch]+=1;
            let freqStrB=freqB.join("#");
            if(freqStrA===freqStrB) {
                // console.log(freqA,freqB);
                return true;
            }
            if((r-l+1)===m){
                freqB[s2.charCodeAt(l)-'a'.charCodeAt(0)]-=1;
                l++;
            }
            r++;
        }
        return false;
    }
}
