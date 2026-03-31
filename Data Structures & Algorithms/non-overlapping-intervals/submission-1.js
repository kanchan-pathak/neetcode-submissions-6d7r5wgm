class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // sort by ending points (starts don't matter)
        intervals.sort((a,b)=>a[1]-b[1])
        let prevEnd=intervals[0][1]
        let removals=0
        let n=intervals.length
        for(let i=1;i<n;i++){
         let current=intervals[i]
         // does overlap exist?
         if(current[0]<prevEnd){
            removals+=1
            // yes? then we remove one interval
            // mostly we remove curr interval coz its end point is higher
            // we keep prev interval hence prevEnd remains unchanged
            // coz prev gets over fast (more likely that next interval
            // will not overlap)
         }
         else{
            // add to res and now our last end point changes
            prevEnd=current[1]
         }
        }
        return removals
    }
}
