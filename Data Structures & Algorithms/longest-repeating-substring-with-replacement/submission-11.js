class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Main logic of sliding window problems:
        // keep explanding window, until you encounter invalid window
        // then shrink to make window valid again
        let l=0,r=0;
        let maxFreq=0;
        let maxWindow=0;
        let freqMap=new Map();
        while(l<=r && r<s.length){
            freqMap[s[r]]=(freqMap[s[r]]||0)+1;
            maxFreq=Math.max(maxFreq,freqMap[s[r]]);
            let windowSize=r-l+1;
            // loop to make invalid window valid
            while(windowSize-maxFreq>k) 
            {
                freqMap[s[l]]--;
                l++;
                windowSize--;
                // we dont decr maxFreq coz it may be stale, but since it 
                // only increases, it never causes an invalid larger answer
            }
            maxWindow=Math.max(maxWindow,windowSize)
            r++;
        }
        return maxWindow;        
    }
}
