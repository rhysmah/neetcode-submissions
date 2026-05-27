class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(nums) {
        let maxAmount = 0;
        let left = 0;
        let right = 1;
        
        while (right < nums.length) {
            maxAmount = Math.max(maxAmount, (nums[right] - nums[left]));
            if (nums[right] < nums[left]) {
                right = left;
                left++;
            }
            right++;
        }
        return maxAmount;
    }
}
