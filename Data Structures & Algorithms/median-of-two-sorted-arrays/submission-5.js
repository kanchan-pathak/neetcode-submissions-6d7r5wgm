class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A=nums2,B=nums1;
        // keep shorter array as A, for convenience
        if(nums1.length<nums2.length){
            A=nums1;
            B=nums2;
        }
        let m=A.length,n=B.length;
        //total length of the left side of merged array
        let leftSize=Math.floor((m+n+1)/2);
        // you are doing binary searc on "number of elements to take from A"
        // so search space should include m (meaning you are taking all elements from A)
        let l=0,r=m;
        let median=0;
        while(l<=r){
            // number of elements to take from A for the left side
            let partA=Math.floor((l+r)/2); 
            let partB=leftSize-partA;
            // edge cases
            let maxLeftA=partA===0?-Infinity:A[partA-1];
            let maxLeftB=partB===0?-Infinity:B[partB-1];
            let minRightA=partA===m?Infinity:A[partA];
            let minRightB=partB===n?Infinity:B[partB];
            // valid partition found
            // we know maxLeftA<minRightA coz its a sorted array
            // so to check validity of left side and right side, we have to cross check
            if(maxLeftA<=minRightB && maxLeftB<=minRightA){
                if((m+n)%2===0){
                    median=(Math.max(maxLeftA,maxLeftB)+Math.min(minRightA,minRightB))/2;
                }
                else{
                    median=Math.max(maxLeftA,maxLeftB);
                }
                return median;
            }
            // we have taken too many elements from A
            else if(maxLeftA>minRightB){
                r=partA-1;
            }
            // if maxleftB>minRightA =>taken more elements from B, so take fewer elements from B [take more from A]
            else{
                l=partA+1;
            }
        }
        return median;
    }
}
