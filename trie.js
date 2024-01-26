class Trie {
	constructor() {
		this.root = {};
	}

	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node[char]) {
				node[char] = {};
			}
			node = node[char];
		}
		node.isEnd = true;
	}

	startsWith(prefix) {
		return this.traverse(prefix) ? true : false;
	}

	search(word) {
		let node = this.traverse(word);
		return node && node.isEnd ? true : false;
	}

	traverse(word) {
		let node = this.root;
		for (let char of word) {
			if (!node[char]) {
				return null;
			}
			node = node[char];
		}
		return node;
	}
}

let myTrie = new Trie()
myTrie.insert('as')
console.log(myTrie.root)