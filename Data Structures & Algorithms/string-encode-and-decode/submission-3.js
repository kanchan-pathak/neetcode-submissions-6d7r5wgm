class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let resArray=[]
        for(let word of strs){
            let len=word.length;
            let str=String(len)+"#"+word;
            resArray.push(str);
        }
        return resArray.join("");

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let resArray=[];
        let n=str.length;
        let i=0;
        while(i<n){
            if(str[i]>='0' && str[i]<='9'){
                let num=0;
                while(str[i]>='0' && str[i]<='9'){
                    num=num*10+Number(str[i]);
                    i+=1;
                }
                i+=1; //to pass '#'
                resArray.push(str.substring(i,i+num));
                i=i+num;
            }
        }
        return resArray;
    }
}
