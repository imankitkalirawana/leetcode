/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const dummy = new LinkedListNode(0);
    dummy.next = head;
    let ptr = dummy;

    while (ptr !== null) {

        let tracker = ptr;

        for (let i = 0; i < k; i++) {
            if (tracker === null) {
                break;
            }
            tracker = tracker.next;
        }

        if (tracker === null) {
            break;
        }

        const updatedNodes = reverseLinkedList(ptr.next, k);
        const previous = updatedNodes[0];
        const current = updatedNodes[1];

        const lastNodeOfReversedGroup = ptr.next;
        lastNodeOfReversedGroup.next = current;
        ptr.next = previous;
        ptr = lastNodeOfReversedGroup;
    }

    return dummy.next;
};

class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}



 function reverseLinkedList(head, k) {
    
    let previous = null;
    let current = head;
    let next = null;

    for (let i = 0; i < k; i++) {
        // temporarily store the next node
        next = current.next;
        // reverse the current node
        current.next = previous;
        // before we move to the next node, point previous to the current node
        previous = current;
        // move to the next node
        current = next;
    }
    
    return [previous, current];
}