class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //recursion with memoistaion
        let dp=Array(n).fill(null);
        //dp defines the num of ways to reach end from curr step
        function fn(i){
            //base case
            if(i===n) return 1;
            if(i>n) return 0;
            if(dp[i]!==null) return dp[i];
            let res=fn(i+1)+fn(i+2);
            dp[i]=res;
            return res;
        }
        let ans=fn(0);
        return ans;
    }
}
