class LRUCache {
	cache = []; // could also be in constructor
	testVar = 100;
	constructor(capacity) {
		this.capacity = capacity;
	}
	/**
	 * @param {number} key
	 * @return {number}
	 */
	get(key) {
		let [keyVal, i] = this.getKeyValI(key);

		if (!keyVal) {
			return -1;
		}

		// update by removing it and putting at the end
		this.cache.splice(i, 1);
		this.cache.push(keyVal);
		return keyVal[1];
	}
  getKeyValI(key){
    let keyVal
    let i
		for (let index = 0; index < this.cache.length; index++) {
			if (this.cache[index][0] === key) {
				keyVal = this.cache[index];
				i = index;
				break;
			}
		}
    return [keyVal,i]
  }
	/**
	 * @param {number} key
	 * @param {number} value
	 * @return {void}
	 */
	put(key, val) {
		let [keyVal,i] = this.getKeyValI(key)

		// if key already exists, update and put at end
		if (keyVal) {
			keyVal[1] = val;
			this.cache.splice(i, 1);
			this.cache.push(keyVal);
			return null;
		}
		// if at capacity, remove LRU
		if (this.cache.length === this.capacity) {
			this.cache.splice(0, 1);
		}
		// add to cache
		this.cache.push([key, val]);
		return null;
	}
}

let obj = new LRUCache(2);
console.log(`Example obj.put(1,1): `, obj.put(2, 1));
console.log(`Example obj.cache: `, obj.cache);
console.log(`Example obj.put(2,2): `, obj.put(2, 2));
console.log(`Example obj.cache: `, obj.cache);
console.log(`Example obj.get(1): `, obj.get(1));
console.log(`Example obj.cache: `, obj.cache);
console.log(`Example obj.put(3,3): `, obj.put(3, 3));
console.log(`Example obj.cache: `, obj.cache);
console.log(`Example obj.put(4,4): `, obj.put(4, 4));
console.log(`Example obj.cache: `, obj.cache);
console.log(`Example obj.get(1): `, obj.get(1));
console.log(`Example obj.cache: `, obj.cache);

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//  //Input
// ["LRUCache", "put",   "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2],        [1, 1], [2, 2],  [1],   [3, 3], [2],  [4, 4], [1],   [3],   [4]]
// Output
// [null,        null,    null,   1,    null,   -1,    null,   -1,    3,     4]


const x = new Map()
x.set(1,100)
x.set(2,200)
x.set(3,300)
const y = x.get(1)
console.log(`Example y: `, y)
console.log(x.keys().next());
