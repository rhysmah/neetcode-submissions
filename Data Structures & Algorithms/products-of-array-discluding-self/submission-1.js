class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array();

        let num = 1;
        for (let i = 0; i < nums.length; i++) {
            result.push(num); // current array val
            num = num * nums[i]; // next array val;
        }

        num = 1;
        for (let i = result.length - 1; i >= 0; i--) {
            result[i] *= num;
            num *= nums[i];
        }
        
        return result;
    }
}
