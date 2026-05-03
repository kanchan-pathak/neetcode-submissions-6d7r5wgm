class MedianFinder:
    def __init__(self):
        self.minHeap=[]
        self.maxHeap=[]

    def addNum(self, num: int) -> None:
        heapq.heappush(self.maxHeap,-num)
        if (len(self.maxHeap)-len(self.minHeap)>1) or (self.minHeap and -(self.maxHeap[0])>self.minHeap[0]):
            val=heapq.heappop(self.maxHeap)
            heapq.heappush(self.minHeap,-val)
        if(len(self.minHeap)-len(self.maxHeap)>1):
            val=heapq.heappop(self.minHeap)
            heapq.heappush(self.maxHeap,-val)

    def findMedian(self) -> float:
        res=0.0
        if len(self.minHeap)==len(self.maxHeap):
            res=(self.minHeap[0]-self.maxHeap[0])/2.0
        elif len(self.minHeap)>len(self.maxHeap):
            res=self.minHeap[0]
        else:
            res=-self.maxHeap[0] 
        return res
    
        
        