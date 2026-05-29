class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = new Map();

        for (let i = 0; i < s.length; i++) {
            seen.set(s[i], (seen.get(s[i]) || 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            seen.set(t[i], (seen.get(t[i]) || 0) - 1);
        }
        
        return Array.from(seen.values()).every(val => val === 0);
    }
}
