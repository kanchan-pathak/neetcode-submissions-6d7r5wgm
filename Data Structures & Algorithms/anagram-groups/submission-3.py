class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res={}
        for s in strs:
            freqArray=[0]*26
            for c in s:
                freqArray[ord(c)-ord('a')]+=1
            freqTuple=tuple(freqArray)
            if freqTuple not in res:
                res[freqTuple]=[]    
            res[freqTuple].append(s)
        resList=list(res.values())
        return resList