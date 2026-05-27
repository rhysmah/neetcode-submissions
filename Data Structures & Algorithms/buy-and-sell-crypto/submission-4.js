class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(nums) {
        let maxProfit = 0;
        let left = 0;
        let right = 1;
        
        while (right < nums.length) {
            if (nums[left] < nums[right]) {
                let currentProfit = nums[right] - nums[left];
                maxProfit = Math.max(maxProfit, currentProfit)
            } else {
                left = right;
            }
            right++;
        }
        return maxProfit;
    }
}
