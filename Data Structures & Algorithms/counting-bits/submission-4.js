class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res=[0];
        for(let i=1;i<=n;i++){
            let temp=i;
            let count=0;
            while(temp!==0){
                temp=temp&(temp-1); //unsets last set bit
                count+=1;
            }
            res.push(count);
        }
        return res;
    }
}
