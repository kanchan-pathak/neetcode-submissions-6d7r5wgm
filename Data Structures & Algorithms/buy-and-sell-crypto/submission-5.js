class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestBuy=prices[0];
        let n=prices.length;
        // dp dfn max profit till now
        let dp=Array(n).fill(0);
        for(let i=1;i<n;i++){
            lowestBuy=Math.min(lowestBuy,prices[i])
            dp[i]=Math.max(dp[i-1],prices[i]-lowestBuy);
        }
        return dp[n-1];
    }
}
