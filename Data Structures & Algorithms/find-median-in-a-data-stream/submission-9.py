class MedianFinder:
    def __init__(self):
        self.minHeap=[]
        self.maxHeap=[]

    def addNum(self, num: int) -> None:
        # basic idea: put smaller numbers in maxHeap, and larger numbers in minHeap
        # median is the heap whose size is bigger. or if eq, then avg of both tops 
        # python inbuilt heap is min heap, so negate nums to craete max heap
        heapq.heappush(self.maxHeap,-num);
        #negate all max heap values
        if((len(self.maxHeap)-len(self.minHeap))>1 or (self.minHeap and -self.maxHeap[0]>self.minHeap[0]) ):
            val=heapq.heappop(self.maxHeap);
            heapq.heappush(self.minHeap,-val);
        if((len(self.minHeap)-len(self.maxHeap))>1):
            val=heapq.heappop(self.minHeap);
            heapq.heappush(self.maxHeap,-val);

    def findMedian(self) -> float:
        root=0.0;
        if(len(self.maxHeap)==len(self.minHeap)):
            res=(self.minHeap[0]-self.maxHeap[0])/2.0;
        elif(len(self.maxHeap)>len(self.minHeap)):
            res=-self.maxHeap[0]
        else:
            res=self.minHeap[0]
        return res;        
    
        
        