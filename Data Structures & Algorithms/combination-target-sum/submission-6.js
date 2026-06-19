class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // backtracking. n
        nums.sort((a,b)=>a-b);
        let res=[]
        function fn(idx,path,sum){
            // just breaking current function, not parent function's loop.
            // so if [2,2,6] >9, yet code will run for [2,2,9] (unecessary)
            if(sum===target){
                    res.push(path.slice());
                    return;
                }
                
            for(let i=idx;i<nums.length;i++){
                if(sum+nums[i]>target) break;
                path.push(nums[i]);
                fn(i,path,sum+nums[i]);
                path.pop();
            }
        }
        fn(0,[],0);
        return res;
    }
}
