class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let n=intervals.length
        let res=[]
        let i=0
        // while end points are smaller than start pt of new (non overlapping smaller intervals)
        while(i<n && intervals[i][1]<newInterval[0]){
            res.push(intervals[i]);
            i+=1;
        } 
        // while start points are smaller than end pt of new - overlap
        while(i<n && intervals[i][0]<=newInterval[1]){
            newInterval[0]=Math.min(newInterval[0],intervals[i][0]);
            newInterval[1]=Math.max(newInterval[1],intervals[i][1]);
            i+=1;
        }
        res.push(newInterval);
        // while start pts are greater than end pt of new
        while(i<n){
            res.push(intervals[i]);
            i+=1;
        }
        return res;
    }
}
