class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1,right=Math.max(...piles);
        let res=Infinity;
        while(left<=right){
            let k=Math.floor((left+right)/2);
            let currSum=0;
            for(let i=0;i<piles.length;i++){
                currSum+=Math.ceil(piles[i]/k);
            }
            if(currSum>h){
                left=k+1;
            }
            else{
                right=k-1;
                // if takes less than h hrs, valid soln
                res=Math.min(res,k);
            }
        }
        return res;
    }
}
