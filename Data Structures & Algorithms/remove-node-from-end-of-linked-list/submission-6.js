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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let listLength = this.findListLength(head);

        const dummy = new ListNode();
        dummy.next = head;

        const nodeToRewire = listLength - n;

        let curr = dummy;
        let count = 0;

        while (curr !== null) {
            if (count === nodeToRewire) {
                curr.next = curr.next.next;
                return dummy.next;
            }
            count++;
            curr = curr.next;
        }
    }

    findListLength(head) {
        if (head === null) return null;
        
        let curr = head;
        let count = 0;
        
        while (curr != null) {
            count++;
            curr = curr.next;
        }

        return count;
    }
}
