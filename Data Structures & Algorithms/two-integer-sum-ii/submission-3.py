class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        leftptr=0
        rightptr=len(numbers)-1
        #you can directly return. no need of res=[]
        while leftptr<rightptr:
            #sum is inbuilt fn. avoid using it as var name
            current_sum=numbers[leftptr]+numbers[rightptr]
            if current_sum>target:
                rightptr-=1
            elif current_sum<target:
                leftptr+=1
            else:
                return [leftptr+1,rightptr+1]
        return []
        