class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        //o(1) but runs only for set bits amt of times (1s) so more efficient
        let count=0;
        while(n!==0){
            n=n&(n-1); //unsets (convert to 0) the least set bit (rightmost 1)
            count+=1; //counter
        }
        return count;
    }
}
