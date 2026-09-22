class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestBuy=prices[0];
        let n=prices.length;
        let maxP=0;
        for(let i=1;i<n;i++){
            lowestBuy=Math.min(lowestBuy,prices[i])
            let profit=prices[i]-lowestBuy;
            if(profit>maxP) maxP=profit;
        }
        return maxP;
    }
}
