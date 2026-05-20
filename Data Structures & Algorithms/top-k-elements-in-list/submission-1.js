class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const results = new Map();

        for (const num of nums) {
            results.set(num, (results.get(num) || 0) + 1);
        }

        return Array.from(results.entries())
            .sort((a, b) => a[1] - b[1])
            .slice(-k)
            .map(pair => pair[0]);
    }
}
