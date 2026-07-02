class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // bfs approach: Kahn's algo/ topological sort
    let adj_list=Array.from({length:numCourses},()=>[]);
    let indeg=Array(numCourses).fill(0);
    let queue=[];
    let finished=0;
    //create adjacency list
    for(let [u,v] of prerequisites){
        adj_list[v].push(u);
        indeg[u]+=1;
    }
    for(let i=0;i<numCourses;i++){
        if(indeg[i]===0) queue.push(i);
    }
    while(queue.length!==0){
        let curr=queue.shift();
        finished++;
        for(let nei of adj_list[curr]){
            indeg[nei]-=1;
            if(indeg[nei]===0) queue.push(nei);
        }
    }
    return finished===numCourses;
    }
}
