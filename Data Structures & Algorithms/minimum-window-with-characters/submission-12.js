class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need=new Map(),have=new Map();
        let formed=0, required=0;
        let l=0,r=0;
        let minSize=Infinity;
        let resLeft=0;
        for(let c of t){
            need.set(c,(need.get(c)||0)+1);
        }
        required=need.size; //only unique chars
        while(r<s.length){
            if(need.has(s[r])){
                have.set(s[r],(have.get(s[r])||0)+1);
                if(need.get(s[r])===have.get(s[r])) formed++;
            }
            while(formed===required){
                //shrink window
                if((r-l+1)<minSize) 
                {
                    minSize=r-l+1;
                    resLeft=l;
                }
                if(need.has(s[l])){
                    have.set(s[l],have.get(s[l])-1);
                    if(have.get(s[l])<need.get(s[l])) formed--;
                }
                l++;
            }
            r++;
        }
        return minSize===Infinity? "":s.slice(resLeft,resLeft+minSize);
    }
}
