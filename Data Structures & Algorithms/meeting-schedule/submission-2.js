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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // sorting by start - coz checking for overlaps
        intervals.sort((a,b)=>a.start-b.start)
        let n=intervals.length
        for(let i=1;i<n;i++){
            let prev=intervals[i-1]
            let curr=intervals[i]
            // do they overlap
            if(curr.start<prev.end) return false
        }
        return true
    }
}
