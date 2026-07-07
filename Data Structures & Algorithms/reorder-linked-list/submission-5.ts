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
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) return;

        const middleNode = this.findMiddle(head);
        console.log(middleNode)
        const reversed = this.reverseList(middleNode)
        console.log(reversed)
        
        this.mergeLists(head, reversed)
    }

    findMiddle(head: ListNode | null): ListNode | null {
        if (head === null) return null;
        if (head.next === null) return head;

        let nodeToCut;
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            nodeToCut = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        nodeToCut.next = null;
        return slow;
    }
    
    reverseList(head: ListNode): ListNode | null {
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

    mergeLists(l1: ListNode, l2: ListNode): ListNode {
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        let dummy = new ListNode();
        let newList = dummy;

        while (l1 !== null && l2 !== null) {
            newList.next = l1;
            l1 = l1.next;
            newList = newList.next;

            newList.next = l2;
            l2 = l2.next;
            newList = newList.next;
        } 

        if (l1 === null) newList.next = l2;
        if (l2 === null) newList.next = l1;

        return dummy.next;
    }
}
