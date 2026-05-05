class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0;
        let maxProfit=0;
        // move only r
        for(let r=1;r<prices.length;r++){
            // we found a lower price so update l
            if(prices[r]<prices[l]){
                l=r;
            }
            // otherwise just profit calc 
            else{
                let profit=prices[r]-prices[l];
                if(profit>maxProfit) maxProfit=profit;
            }
        }
        return maxProfit;
    }
}
