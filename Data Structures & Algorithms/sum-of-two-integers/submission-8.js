class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b!==0){
            // carry is generated when we have 2 or more set bits. & helps us get those bits.
            // 101 & 111=101. and we shift carry one to left because we will apply them to higher bits
            let carry=(a&b)<<1;
            // sum is the xor of both values. we haven't added our carry yet
            // we save our partial sum to a and carry value to b, so that next iteration i add carry to the partial sum
            // this goes on until there is no carry left
            a=a^b;
            b=carry;
        }
        return a;
    }
}
