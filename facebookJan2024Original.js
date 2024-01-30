// pow(x, y) := x ^ y
// pow(2, 3) = 2*2*2 = 8
// pow(3, 2) = 3*3 = 9

// pow(3, 8)
// 3 * 3 * 3 * 3 ... * 3

// function pow(x,y){ // 8, 3
//   const temp = x // 2
//   for(let i = 0; i < y - 1; i++){ // i = 2; 2 < 2;
//     x *= temp
//   }

//   return x
// }
// 4
// function pow(x,y){ // 2, 2
//   if(y===0) return x // 3 === 0
//   if(y%2===0){
//     return pow(x,Math.floor(y/2)) * pow(x,Math.floor(y/2))
//   }else{
//     return pow(x,Math.floor(y/2)) * pow(x,Math.floor(y/2)) * pow(x,Math.floor(y/2))
//   }
// }

// pow()
// pow(2,1){pow(2,0)*pow(2,0)}
// pow(2,3){pow(2,1)*pow(2,1)}

// same value tree.
// if values of each node of a tree are identical, the tree is Same-Value-Tree.
//   2
// 2   2       -> 5
//3 2  2  2
//          2
function sameValue(node, value) {
	// n2, 2
	if (!node) return true;
	if (value !== node.val) {
		return false;
	}

	return sameValue(node.left, node.val) && sameValue(node.right, node.val);
}
class Node {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const n3 = new Node(3);
const n2 = new Node(2);
const root = new Node(2, n2, n3);
sameValue(root, root.val);
// count the number of same value sub-trees given a tree.
// sub-tree: drop off parent edge and treat the node as new root.
