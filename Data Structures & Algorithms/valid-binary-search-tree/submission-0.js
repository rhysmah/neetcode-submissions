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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.helper(root, -2000, 2000);
    }

    helper(node, min,  max) {
        if (node === null) return true;
        if (node.val > min && node.val < max) {
            return this.helper(node.left, min, node.val) && this.helper(node.right, node.val, max);
        }
        return false;
    }
}
