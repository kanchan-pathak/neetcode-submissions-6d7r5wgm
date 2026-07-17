class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let l=0, r=height.length-1;
    let maxLeft=height[l], maxRight=height[r];
    let waterCount=0;
    let totalWater=0;
    while(l<r){
        if(maxRight<maxLeft){
            r-=1;
            waterCount=maxRight-height[r];
            console.log("maxRight "+maxRight+" "+"maxLeft "+maxLeft+" "+"water "+waterCount)
        }
        else{
            l+=1;
            waterCount=maxLeft-height[l];
        }
        if(waterCount>0) totalWater+=waterCount;
        maxLeft=Math.max(maxLeft,height[l]);
        maxRight=Math.max(maxRight,height[r]);
    }
    return totalWater;
    }
}
