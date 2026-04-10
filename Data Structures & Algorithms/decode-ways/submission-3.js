class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let n=s.length
        //dp defines number of ways string can be decoded starting from i
        let dp=Array(n+2).fill(0);
        dp[n+1]=0
        dp[n]=1; //decoding "" is 1 way
        //starting from back
        for(let i=n-1;i>=0;i--){
            // if its "0" we cant take it as single digit or as preceding zero
            if(s[i]==="0") continue;
            dp[i]=dp[i+1];
            let num=Number(s.substring(i,i+2));
            // only if pair is valid it is calculated
            if(i+1<n && 10<=num && num<=26){
                dp[i]+=dp[i+2];
            }
        }
        return dp[0]

    }
}
