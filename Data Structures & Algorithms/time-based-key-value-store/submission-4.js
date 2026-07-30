class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[]);
        }
        this.keyStore.get(key).push([value,timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        //Main logic: when search fails, the irght ptr has teh largets value<target
        let arr=this.keyStore.get(key);
        if(!arr) return "";
        let left=0,right=arr.length-1;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(arr[mid][1]===timestamp) return arr[mid][0];
            if(arr[mid][1]<timestamp) left=mid+1;
            else right=mid-1;
        }
        return (right!==undefined || right!==null)? (right>=0? arr[right][0]:""):"";
    }
}
