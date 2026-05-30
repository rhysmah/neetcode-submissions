class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const results = new Map();
    
        for (const str of strs) {
            let sorted = Array.from(str).sort().join("");
            
            if (!results.has(sorted)) {
                results.set(sorted, [str]);
            } else {
                results.get(sorted).push(str)
            }
        }   
        return Array.from(results.values());
    }
}
