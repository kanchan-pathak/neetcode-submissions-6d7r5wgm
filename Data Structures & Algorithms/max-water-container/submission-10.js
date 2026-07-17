class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0,r=heights.length-1;
        let maxWater=0;
        while(l<r){
            let water=Math.min(heights[l],heights[r])*(r-l);
            if(water>maxWater) maxWater=water;
            // The only way to possibly increase area/water
            // is to find a taller left wall to compensate
            // width which will ONLY decrease further
            if(heights[l]>heights[r]) r--;
            else l++;
        }
        return maxWater;
    }
}
