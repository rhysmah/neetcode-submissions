/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (head === null) return false;
        
        let tort = head;
        let hare = head.next;

        while (hare !== null) {
            if (hare === tort) return true;
            
            tort = tort.next;
            if (hare.next === null || hare.next.next === null) return false;
            else hare = hare.next.next;
            
        }
        return false;
    }
}
