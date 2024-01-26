class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

function removeLoop(head) {
	//
	let visited = new Map(); // {}
	visited.set(head, true);
	let current = head; //
	let next = current.next; //
	while (next) {
		//
		if (visited.get(next)) {
			//
			current.next = null;
			break;
		} else {
			visited.set(next, true);
			current = next;
			next = current.next;
		}
	}
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

n1.next = n2;
n2.next = n3;
n3.next = n1;

removeLoop(n1);

let current = n1;
let count = 0;
while (current && count < 10) {
	console.log("This is result: ", current);
	current = current.next;
	count++;
}
