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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const arr = [];
        return this.helperKthSmallest(root, arr)[k - 1]
    }

    helperKthSmallest(node, arr) {
        if (node === null) return;

        this.helperKthSmallest(node.left, arr)
        arr.push(node.val);
        this.helperKthSmallest(node.right, arr);
        
        return arr;
    }
}

