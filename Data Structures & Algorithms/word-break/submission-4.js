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
        //to optimise. we find max length of any word in dictionary
        let maxLen=Math.max(...wordDict.map(w=>w.length));
        // i is the end limit
        for(let i=1;i<=n;i++){
            // j is start, so we check for substring 0...i-1, 1...i-1, so on
            // to optimise: for i=8 and maxLen=4, it is redundant to check
            // 0 to 8 (coz length is 8 and our max length of word in dict is 4)
            // so  start from i-maxLen
            for(let j=Math.max(0,i-maxLen);j<i;j++){
                // dp[4] is true and substring 4-8 is also in dictionary
                if(dp[j] && wordDict.includes(s.substring(j,i))){
                    dp[i]=true;
                    break;
                }
            }
        }
        return dp[n];    
    }
}
