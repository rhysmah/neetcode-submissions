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
     * @return {void}
     */
    reorderList(head) {
        if (head === null || head.next === null) return;
        const middleNode = this.findMiddle(head);
        let reversedFromMiddle = this.reverseList(middleNode);
        this.mergeLists(head, reversedFromMiddle);
    }

    /**
     * @parm {ListNode} head
     * @return {Listnode}
     */
    findMiddle(head) {
        if (head === null) return null;
        if (head.next === null) return head;

        let oneBehindSlow;
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            oneBehindSlow = slow
            slow = slow.next;
            fast = fast.next.next;
        }

        oneBehindSlow.next = null;
        return slow;
    }
    
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) return null;
        
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    mergeLists(l1, l2) {
        if (l1 === null) return l2;
        if (l2 === null) return l1;
        
        let dummy = new ListNode();
        let mergedList = dummy;

        while (l1 !== null && l2 !== null) {
            mergedList.next = l1;
            mergedList = mergedList.next;
            l1 = l1.next;

            mergedList.next = l2;
            mergedList = mergedList.next;
            l2 = l2.next;
        }

        if (l1 === null) mergedList.next = l2;
        if (l2 === null) mergedList.next = l1;

        return dummy.head;
    }
}
