class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        //alien dictionary has two parts
        //1) forming the graph. how? creating adj list for all nodes.
        //then at first mismatch of chars in a pair of words, connect the graph.
        let adj=new Map();
        let indeg=new Map();
        let n=words.length;
        let res=[];
        for(let word of words){
            for(let c of word){
                //to avoid repeated work
                if(!(adj.has(c))){
                    adj.set(c,new Set());
                    indeg.set(c,0);
                }
            }
        }
        for(let i=1;i<n;i++){
            let w1=words[i-1];
            let w2=words[i];
            // dictionary invalid if a prefix+main word comes before prefix, ie preboards, pre - invalid  
            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }
            let minLen=Math.min(w1.length,w2.length);
            for(let j=0;j<minLen;j++){
                // when first mismatch encountered
                if(w1[j]!==w2[j]){
                    //if not already connected
                    if(!adj.get(w1[j]).has(w2[j])){
                        adj.get(w1[j]).add(w2[j]);
                        indeg.set(w2[j],indeg.get(w2[j])+1);
                    }
                    break;
                }
            }
        }
        //2) checking for cycle part. Kahn's (can be dfs)
        let q=[]
        for(let [key,val] of indeg){
            if(val===0){
                q.push(key);
            }
        }
        while(q.length!==0){
            let curr=q.shift();
            res.push(curr);
            if(adj.has(curr)){
                for(let nei of adj.get(curr)){
                    indeg.set(nei,indeg.get(nei)-1);
                    if(indeg.get(nei)===0){
                        q.push(nei);
                    }
                }
            }
        }
        if(res.length!==adj.size) return ""
        return res.join("");

    }
}
