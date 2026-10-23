class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // dp defn: dp[i] is min num of coins needed for i 
        let dp=Array(amount+1).fill(Infinity);
        // base case: for amt 0, choosing 0 coins is valid
        dp[0]=0;
        // we need smaller subproblems solved for every problem, so left to right
        for(let currAmt=1;currAmt<=amount;currAmt++){
            let minCoins=Infinity;
            //iterate over coins
            for(let j=0;j<coins.length;j++){
                //skip if difference is negative (out of bounds err)
                if(currAmt-coins[j]<0) continue;
                //choosing coins[i] is one coin itself, so we add 1
                minCoins=Math.min(minCoins,1+dp[currAmt-coins[j]]);
            }
            dp[currAmt]=minCoins;
        }
        return dp[amount]!==Infinity? dp[amount] : -1;
    }
}
