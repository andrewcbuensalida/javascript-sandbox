var permuteUnique = function (nums) {
	nums = nums.split("").sort();
	// [1,1,2]
	let output = [];
	let permutation = [];
	let map = {};
	for (let num of nums) {
		map[num] ? map[num]++ : (map[num] = 1);
	}
	r();
	const joinedOutput = [];
	for (let perm of output) {
		joinedOutput.push(perm.join(""));
	}
	return joinedOutput;

	function r() {
		if (permutation.length === nums.length) {
			return output.push([...permutation]);
		}
		for (let num in map) {
			if (map[num] === 0) continue; //
			map[num]--;
			permutation.push(num);
			r();
			map[num]++;
			permutation.pop(); //
		}
	}
};

const result = permuteUnique("jok");
console.log("result: ", result);
