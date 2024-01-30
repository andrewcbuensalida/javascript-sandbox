class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}
const node5 = new Node(5);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

// Delete kth node from end of singly linked list
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
//                  p2        p1
// k = 2
// Output: 1 -> 2 -> 3 -> 5 -> null

// 1 -> null
// p2 ->
// p1
// // null
function deleteNode(head, k) {
	if (!head) return null;

	let p1 = head;
	let p2 = head;
	// loop until p1 reaches the end
	let counter = 0; // 4
	while (p1.next) {
		// if p1 moved k times
		p1 = p1.next;

		if (counter >= k) {
			p2 = p2.next;
		}
		counter++;
	}
	p2.next = p2.next?.next;
	return head;
}

deleteNode(node1, 1);
console.log(`Example node1: `, JSON.stringify(node1));

// ===================================================================================================

// given a binary tree, with integer values at each node. The candidate is expected to return the sum of the numbers represented by the values on each node in each root-to-leaf path. The level of the tree is the significance digit on the number. Please see the example below.

// root=> 2
//       / \
//      3   4
//    /  \
//   1    5
// The output should be: 231 + 235 + 24 = 490

class TreeNode {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

const treeNode4 = new TreeNode(4);
const treeNode5 = new TreeNode(5);
const treeNode1 = new TreeNode(1);
const treeNode3 = new TreeNode(3, treeNode1, treeNode5);
const root = new TreeNode(2, treeNode3, treeNode4);

function sum(root) {
	function recursion(node, number) {
		number = number + node.value; //
		if (!node.left && !node.right) {
			return number;
		}
		number = number * 10;
		return recursion(node.left, number) + recursion(node.right, number);
	}
	return recursion(root, 0);
}

const output = sum(root);
console.log(`Example output: `, output);