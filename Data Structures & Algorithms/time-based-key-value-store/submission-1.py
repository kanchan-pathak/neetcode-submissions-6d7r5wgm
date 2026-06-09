class TimeMap:

    def __init__(self):
        self.hashStorage=defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.hashStorage[key].append([timestamp,value])
        

    def get(self, key: str, timestamp: int) -> str:
        res=""
        values=self.hashStorage.get(key,[])
        left,right=0,len(self.hashStorage[key])-1
        while left<=right:
            mid=(left+right)//2
            if(values[mid][0]<=timestamp):
                res=values[mid][1]
                left=mid+1 #there might be a timestamp more closer to the asked timestamp
            else:
                right=mid-1
        return res
            
        
