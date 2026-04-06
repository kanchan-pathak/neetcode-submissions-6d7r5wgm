
// dsu is used to find connected components
// dsu checks if my parent and ur parent are same we connected
class DSU{
    constructor(n){
        this.parent=Array.from({length:n+1},(_,i)=>i);
        this.rank=Array.from({length:n+1},()=>0);
    }
    find(x){
        //cutting short the line/connection between node and its highest ancestor
        
        if(this.parent[x]!==x){
            this.parent[x]=this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x,y){
        let rootX=this.find(x);
        let rootY=this.find(y);
        // meaning they are already connected
        if(rootX===rootY) return false;
        if(this.rank[rootX]>this.rank[rootY]){
            this.parent[rootY]=rootX;
        }
        else if(this.rank[rootX]<this.rank[rootY]){
            this.parent[rootX]=rootY;
        }
        else{
            this.parent[rootY]=rootX;
            this.rank[rootX]+=1;
        }
        // they were not connected before but now they are
        return true;
    }
}
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length>n-1) return false;
        //number of components: nC. Initially set to n as all are separate
        let nC=n;
        let dsu=new DSU(n);
        for(let [u,v] of edges){
            //condition 1: no cycle
            if(!dsu.union(u,v)){
                return false;
            }
            nC-=1;
        }
        //condition 2: number of connected components to be 1
        return nC===1;
    }
}
