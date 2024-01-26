// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	// if no head
	if (!head) return null;
	// have pointer left and pointer right and prePointer
	let left = head;
	let right = head.next;
	let prePointer;
	// if there's only one node
	if (!right) return head;
	// head gets pointer right
	head = right;
	// loop until there's no pointer right
	while (right) {
    // pointer left next gets pointer right next
		left.next = right.next;
		// pointer right next gets pointer left
		right.next = left;
		// reassign left and right
    let tempLeft = left
		left = right;
    if(prePointer) prePointer.next = left
		right = tempLeft;
		// move pointer left and pointer right two nodes
		left = left.next.next;
    prePointer = right
		right = right.next?.next;
    if(!right) prePointer.next = left
	}
	// return head
	return head;
};

let node4 = new ListNode(4);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
swapPairs(node1);
