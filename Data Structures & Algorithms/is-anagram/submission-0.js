class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        
        const letters = new Map();

        for (let i = 0; i < s.length; i++) {
            letters.set(s[i], (letters.get(s[i]) || 0) + 1)
        }

        for (let i = 0; i < t.length; i++) {
            if (!letters.has(t[i])) return false;
            letters.set(t[i], (letters.get(t[i]) - 1));
        }

        const results = Array.from(letters.values());
        for (const count of results) {
            if (count !== 0) return false
        }

        return true;
    }
}
