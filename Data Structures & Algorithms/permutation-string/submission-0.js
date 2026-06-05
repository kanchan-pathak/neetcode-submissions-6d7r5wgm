class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freqArr1=Array(26).fill(0);
        let freqArr2=Array(26).fill(0);
        let windowlen=s1.length;
        let n=s2.length;
        for(let c of s1){
            let idx=c.charCodeAt(0)-'a'.charCodeAt(0);
            freqArr1[idx]+=1;
        }
        let freqStr1=freqArr1.join("#");
        let l=0,r=0;
        while(r<n){
            //console.log(s2.slice(l,r+1))
            let idx=s2[r].charCodeAt(0)-'a'.charCodeAt(0);
            freqArr2[idx]+=1;
            let freqStr2=freqArr2.join("#");
            if(freqStr1===freqStr2) return true;
            //console.log(r-l+1)
            if(r-l+1===windowlen){
                let idx=s2[l].charCodeAt(0)-'a'.charCodeAt(0);
                freqArr2[idx]-=1;
                l++;
            }
            r++;
        }
        return false;

    }
}
