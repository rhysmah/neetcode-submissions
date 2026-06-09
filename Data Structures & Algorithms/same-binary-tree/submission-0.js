/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p1, q1) {
        if (p1 === null && q1 === null) return true;
        if (p1 === null || q1 === null) return false;

        if (p1.val !== q1.val) return false;
        return this.isSameTree(p1.left, q1.left) && this.isSameTree(p1.right, q1.right)
    }
}
