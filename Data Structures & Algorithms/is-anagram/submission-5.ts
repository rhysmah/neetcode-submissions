class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        const letters = new Map();

        for (let i = 0; i < s.length; i++) {
            letters.set(s[i], (letters.get(s[i]) || 0) + 1)
        }

        for (let i = 0; i < t.length; i++) {
            letters.set(t[i], (letters.get(t[i]) || 0) - 1)
        }

        const set = new Set(letters.values())
        if (set.size > 1) return false;
        return true;
    }
}
