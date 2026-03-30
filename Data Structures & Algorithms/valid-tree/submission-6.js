class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length>n-1) return false;
        let visited=new Set();
        //create adjacency list
        let adj_list=Array.from({length:n},()=>[])
        for(let [u,v] of edges){
            adj_list[u].push(v);
            adj_list[v].push(u); 
        }
        let queue=[[-1,0]];
        visited.add(0);
        while(queue.length!==0){
            let [parent,child]=queue.shift();
            console.log(parent,child);
            for(let nei of adj_list[child]){
                // most fns in while loop
                if(nei===parent)continue;
                if(visited.has(nei)) return false;
                visited.add(nei);
                queue.push([child,nei]);
            }
        }
        // visited size tells if all nodes are connected or not
        return visited.size===n;
    }
}
