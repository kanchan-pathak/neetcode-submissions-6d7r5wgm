class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res=new Map();
        for(let s of strs){
            let freqArray=Array(26).fill(0);
            for(let c of s){
                let idx=c.charCodeAt(0)-'a'.charCodeAt(0);
                freqArray[idx]+=1;
            }
            let freqString=freqArray.join("#");
            if(!res.has(freqString)) res.set(freqString,[]);
            res.get(freqString).push(s);
        }
        return Array.from(res.values());
    }
}
