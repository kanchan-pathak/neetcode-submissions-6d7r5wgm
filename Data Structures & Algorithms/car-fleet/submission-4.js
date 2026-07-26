class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // we sort cars based on their position from closet to farthest (wrt target)
        let cars=position.map((element,idx)=>[element,speed[idx]]);
        cars.sort((a,b)=>b[0]-a[0]);

        // main idea: we check with the fleet front of us.
        // if its faster than my current car, then we will not intercept (aka cannot be a fleet)
        // but if the fleet is slower, my current car will collide with it some point or another,
        // hence will be counted as single fleet.
        let n=cars.length;
        let fleets=0;
        let stack=[];
        for(let i=0;i<n;i++){       
            let currTime=(target-cars[i][0])/cars[i][1];
            // only the last time matters
            if(stack.length===0 || (stack.length!==0 && currTime>stack.at(-1))){
                fleets+=1;
                stack.push(currTime);
            }
        }
        return fleets;
    }
}
