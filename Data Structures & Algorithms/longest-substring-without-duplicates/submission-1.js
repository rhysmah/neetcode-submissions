class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        
        let l = 0;
        let r = 0;
        let m = 0;

        while (r < s.length) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }

            seen.add(s[r])
            r++;

            m = Math.max(m, r - l);
        }
        return m;    
    }
}
