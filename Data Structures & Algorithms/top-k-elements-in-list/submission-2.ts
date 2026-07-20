class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if (nums.length === 0) return [];
        if (nums.length === 1) return nums;

        const bucket = new Map();

        for (const num of nums) {
            bucket.set(num, (bucket.get(num) || 0) + 1);
        }

        return Array.from(bucket.entries())
            .sort((pairA, pairB) => pairB[1] - pairA[1]) // Sort pairs smallest to largest
            .map(pair => pair[0])  // Put values into array
            .slice(0, k);
    }
}
