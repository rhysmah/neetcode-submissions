class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            // 3
            
            if (map.has(diff)) return [i, map.get(diff)];
            map.set(nums[i], i)
        }
        return [];
    }
}
