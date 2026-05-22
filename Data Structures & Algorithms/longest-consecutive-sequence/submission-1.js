class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let cnt = 0;
        let max = 0;
        
        for (const num of numSet) {
            let currentNum = num;

            if (!numSet.has(currentNum - 1)) {
                cnt = 1;
                while (numSet.has(currentNum + 1)) {
                    cnt++;
                    currentNum++;
                }
                max = Math.max(cnt, max);
            }
        }
        return max;
    }
}
