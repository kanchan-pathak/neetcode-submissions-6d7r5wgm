class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let adj={}
        let indeg={}
        let res=[]
        for(let w of words){
            for(let c of w){
                if(!(c in adj)){
                adj[c]= new Set()
                indeg[c]=0
                }
            }
        }
        let n=words.length
        for(let i=0;i<n-1;i++){
            let w1=words[i]
            let w2=words[i+1]

            if( w1.length>w2.length && w1.startsWith(w2)){
                return ""
            }
            let minLen=Math.min(w1.length,w2.length)
            for(let j=0;j<minLen;j++){
                if(w1[j]!==w2[j]){
                    if(!adj[w1[j]].has(w2[j])){
                    adj[w1[j]].add(w2[j])
                    indeg[w2[j]]+=1
                    }
                    break
                }
                
            }
        }
        let q=[]
        for(let c in indeg){
            if(indeg[c]===0){
                q.push(c)
            }
        }
        while(q.length!==0){
            let curr=q.shift()
            res.push(curr)
            for(let nei of adj[curr]){
                indeg[nei]-=1
                if(indeg[nei]===0){
                    q.push(nei)
                }
            }
        }
        if(res.length!==Object.keys(adj).length){
            return ""
        }
        let ans=res.join("")
        return ans

    }
}
