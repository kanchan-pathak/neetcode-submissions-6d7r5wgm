class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need=new Map();
        let have=new Map();
        // building need frequency map
        for(let i=0;i<t.length;i++){
            need.set(t[i],(need.get(t[i])||0)+1);
        }
        //no. of conditions. only unique chars.
        let formed=0;
        let required=need.size;
        let l=0,r=0;
        let finalL=0,minLen=Infinity;
        while(r<s.length){
            //expanding
            if(need.has(s[r])){
                have.set(s[r],(have.get(s[r])||0)+1);
                if(need.get(s[r])===have.get(s[r])) formed++;
            }
            // once we have all chars, shrink window.
            while(formed===required){
                // make it a candidate for min window
                if((r-l+1)<minLen){
                    finalL=l;
                    minLen=r-l+1;
                }
                // if current char at l,  is a part pf substring:
                if(need.has(s[l])){
                    have.set(s[l],have.get(s[l])-1);
                    // if conditions aren't matching reduce formed
                    if(have.get(s[l]) < need.get(s[l])) formed--;
                }
                // shrink window
                l++;
            }
            r++;
        }
        return minLen===Infinity? "":s.slice(finalL,finalL+minLen);
    }
}
