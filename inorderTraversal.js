function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @description Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	console.log("this is root: ", root);
	let output = [];
	let queue = [root];
	while (queue.length) {
		let currentNode = queue[0];
		if (!currentNode) {
			queue.shift();
			continue;
		}
		if (currentNode.left) {
			queue.unshift(currentNode.left);
			currentNode.left = null;
			continue;
		}
		output.push(currentNode.val);
		if (currentNode.right) {
			queue.shift();
			queue.unshift(currentNode.right);
			currentNode.right = null;
			continue;
		}
		queue.shift();
	}
	return output;
};

console.log("starting=======================");
let node3 = new TreeNode(3, null, null);
let node2 = new TreeNode(2, node3, null);
let node1 = new TreeNode(1, null, node2);
console.log(`Example inorderTraversal(node1): `, inorderTraversal(node1));
