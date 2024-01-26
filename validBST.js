var isValidBST = function (root) {
	let queue = [root];
	// loop until queue is empty
	while (queue.length > 0) {
		// pop queue
		let currentNode = queue.pop();
		// check if left.val and right.val are correct. if not, return false
		if (
			currentNode.left?.val >= currentNode.val ||
			currentNode.right?.val <= currentNode.val ||
			(currentNode.left?.val <= currentNode.parentVal &&
				currentNode.wentRight) ||
			(currentNode.right?.val >= currentNode.parentVal &&
				currentNode.wentLeft)
		) {
			return false;
		}
		// add left and right
		if (currentNode.left) {
			currentNode.left.parentVal = Math.min(currentNode.parentVal,currentNode.val);
			currentNode.left.wentLeft = true;
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			currentNode.right.parentVal = Math.max(currentNode.parentVal,currentNode.val);
			currentNode.right.wentRight = true;
			queue.push(currentNode.right);
		}
	}
	return true;
};

let node0 = { val: 0 };
let node2 = { val: 2 };
let node4 = { val: 4 };
let node6 = { val: 6 };
let node1 = { val: 1, left: node0, right: node2 };
let node5 = { val: 5, left: node4, right: node6 };
let node3 = { val: 3, left: node1, right: node5 };

isValidBST(node3);
console.log(`Example isValidBST(node3): `, isValidBST(node3));

//            120
//       /          \
//    70             140
//   /   \         /      \
//  50    100    130       160
//  / \    / \    /   \     /  \
// 20  55 75 110  119  135  150  200
// [120,70,140,50,100,130,160,20,55,75,110,119,135,150,200] expected = false
