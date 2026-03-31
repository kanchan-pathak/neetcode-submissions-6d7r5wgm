class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        console.log(intervals);
        let res=[intervals[0]];
        for(let i=1;i<intervals.length;i++){
            let prev=res.at(-1);
            let curr=intervals[i];
            console.log(prev,curr);
            if(prev[1]<curr[0]){
                res.push(curr);
            }
            else{
                res.at(-1)[1]=Math.max(prev[1],curr[1]);
            }
        }
        return res;
}
}
