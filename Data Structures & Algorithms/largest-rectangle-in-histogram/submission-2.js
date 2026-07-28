class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // single stack approach.
        // TC remains o(n). but aux space reduces to o(n)
        let n=heights.length;
        let stack=[];
        let maxArea=0;
        //maintaining a montonic incr stack
        for(let i=0;i<=n;i++){
            let currHeight=(i===n)?0:heights[i];
            while(stack.length!==0 && heights[stack.at(-1)]>=currHeight){    
                // current index is the 'next smaller height to the right' of
                // the height at top of stack
                let nsr=i;
                let ele=stack.pop();
                // and the height below that is the 'next smaller height to the left'
                // of the popped height.
                let nsl=stack.length===0?-1:stack.at(-1);
                // so you the nsr and nsl of popped height, you can calculate area rn
                // because width=(right boundary-1)-(left boundary+1)+1
                // simplify=> width = right-1-left-1+1
                let area=(nsr-nsl-1)*heights[ele];
                if(area>maxArea) maxArea=area;

            }
            stack.push(i);
        }
        return maxArea;

    }
}
