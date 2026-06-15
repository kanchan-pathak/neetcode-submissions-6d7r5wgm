class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        minHeap=[]
        for n in nums:
            heapq.heappush(minHeap,n)
            if len(minHeap)>k:
                #popping bad candidates (min vals), so that in the end
                #we are left with heap of size k with max elements.
                #but the top most is smallest out of all k.
                #so its the kth largest
                heapq.heappop(minHeap)
        return heapq.heappop(minHeap)