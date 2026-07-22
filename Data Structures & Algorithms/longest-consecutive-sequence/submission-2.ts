class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        const numSet = new Set(nums);

        let longest = 1;

        for (let num of numSet) {
            let count = 1;

            while (numSet.has(num + 1)) {
            count++;
            longest = Math.max(count, longest);
            num += 1;
            }
        }
        return longest;
    }
}
