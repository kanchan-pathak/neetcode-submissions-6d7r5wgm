/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let n=intervals.length;
        let starts=[];
        let ends=[];
        for(let i=0;i<n;i++){
            let curr=intervals[i];
            starts.push(curr.start);
            ends.push(curr.end);
        }
        starts.sort((a,b)=>a-b);
        ends.sort((a,b)=>a-b);
        let sptr=0,eptr=0;
        let days=0;
        let mxdays=0;
        while(sptr<n && eptr<n){
            if(starts[sptr]<ends[eptr]){
                days+=1;
                sptr+=1;
            }
            else{
                days-=1;
                eptr+=1;
            }
            mxdays=Math.max(mxdays,days);
        }
        return mxdays;
    }
}
