class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack=[];
        let n=temperatures.length;
        let output=Array(n).fill(0);
        for(let i=0;i<n;i++){
            //console.log(stack);
            //console.log(output);
            while(stack.length && temperatures[stack.at(-1)]<temperatures[i]){
               
               let idx=stack.pop();
               console.log(i,idx);
               output[idx]=i-idx;
            }
            stack.push(i);
        }
        return output;
    }
}
