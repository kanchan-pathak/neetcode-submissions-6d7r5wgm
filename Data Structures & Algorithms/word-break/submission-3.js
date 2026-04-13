class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let n=s.length;
        //dp definition: dp[i] means can s[0 to i-1] be split into dictionary words.
        let dp=Array(n+1).fill(false);
        //empty string exists in dictionary
        dp[0]=true;
        // i is the end limit
        for(let i=1;i<=n;i++){
            // j is start, so we check for substring 0...i, 1...i, so on
            for(let j=0;j<i;j++){
                // dp[4] is true and substring 4-8, code is also in dictionary
                if(dp[j] && wordDict.includes(s.substring(j,i))){
                    dp[i]=true;
                    break;
                }
            }
        }
        return dp[n];    
    }
}
