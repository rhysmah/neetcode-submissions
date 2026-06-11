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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return [];
    
        const ans = [];
        const queue = [];

        queue.push(root)

        while (queue.length > 0) {

            let currentLength = queue.length;
            let level = [];

            for (let i = 0; i < currentLength; i++) {
                let currentNode = queue.shift();
                level.push(currentNode.val);

                if (currentNode.left !== null) queue.push(currentNode.left);
                if (currentNode.right !== null) queue.push(currentNode.right);
            }
            ans.push(level);
        }
        return ans;
    }
}
