class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left,right=1,max(piles)
        res=float('inf')
        while left<=right:
            k=(left+right)//2
            currSum=0
            for i in range(len(piles)):
                currSum+=math.ceil(piles[i]/k)
            if currSum>h:
                left=k+1
            else:
                right=k-1
                res=min(res,k)
        return res