class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res=0;
        for(let i=0;i<32;i++){
            //last bit 1 or 0
            let bit=n&1;
            // OR maintains the already set bits and adds more to exisitings bits
            // 31-i is reversal: 0th bit becomes 31st bit of res
            res=res|(bit<<(31-i));
            n=n>>1;
        }
        return res>>>0 //convert to unsigned
    }
}
