class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b!==0){
            let carry=(a&b)<<1;
            a=a^b; //sum without carry. partial sum
            b=carry;
        }
        return a;
    }
}
