// 21. Merge Two Sorted Lists
// Easy

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Iterative
 const mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    let tail;
    let current1;
    let current2;
    let firstNode;
    
    
    if (list1.val < list2.val) {
        tail = list1;
        firstNode = list1;
        current1 = list1.next;
        current2 = list2;
    } else {
        tail = list2;
        firstNode = list2;
        current1 = list1;
        current2 = list2.next
    }
    
    
    while (current1 !== null && current2 !== null) {
        
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
        
    }
    
    tail.next = current1 !== null ? current1 : current2;
    
    return firstNode;
    
};

// Recursive
const mergeTwoListsRecursive = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    
    if (list1.val < list2.val) {
        const next1 = list1.next;
        list1.next = mergeTwoLists(next1, list2)
        return list1;
    } else {
        const next2 = list2.next;
        list2.next = mergeTwoLists(list1, next2)
        return list2;
    }
    
};