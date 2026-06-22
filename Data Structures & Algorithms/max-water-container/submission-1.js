class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxAmount = 0;

        while (left < right) {
            let amount = (Math.min(heights[left], heights[right]) * Math.abs(left - right));
            if (amount > maxAmount) maxAmount = amount;

            if (heights[left] > heights[right]) right--;
            else left++;
        }
        return maxAmount;
    }
}
