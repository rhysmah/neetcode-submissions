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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        let head = new ListNode();
        let list = head;

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                list.next = list1;
                list1 = list1.next
            } else {
                list.next = list2;
                list2 = list2.next;
            }
            list = list.next
        }

        if (list1 === null) list.next = list2;
        else list.next = list1;

        return head.next;    
    }
}
