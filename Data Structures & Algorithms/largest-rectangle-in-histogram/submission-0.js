class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let left=[];
        let right=[];
        let n=heights.length;
        let stack=[];
        let maxArea=0;
        //building the left boundary using montonic incr stack
        for(let i=0;i<n;i++){
            while(stack.length!==0 && heights[stack.at(-1)]>=heights[i]){
                stack.pop();
            }
            if(stack.length===0) left[i]=0;
            else left[i]=stack.at(-1)+1;
            stack.push(i);
        }
        //console.log(left);
        stack=[];
        //building right boundaries
        for(let i=n-1;i>=0;i--){
            while(stack.length!==0 && heights[stack.at(-1)]>=heights[i]){
                stack.pop();
            }
            if(stack.length===0) right[i]=n-1;
            else right[i]=stack.at(-1)-1;
            stack.push(i);
        }
        //console.log(right);
        //finding max area
        for(let i=0;i<n;i++){
            let area=(right[i]-left[i]+1)*heights[i];//width*height
            if(area>maxArea) maxArea=area;
        }
        return maxArea;

    }
}
