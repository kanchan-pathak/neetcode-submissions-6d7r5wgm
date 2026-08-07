class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let hashSet = new Set();

        function helper(temp) {
            let res = 0;
            while (temp !== 0) {
                let digit = temp % 10;
                temp = Math.floor(temp / 10);
                res += digit * digit;
            }
            return res;
        }

        while (true) {
            let res = helper(n);

            if (res === 1) return true;
            if (hashSet.has(res)) return false;

            hashSet.add(res);
            n = res;
        }
    }
}