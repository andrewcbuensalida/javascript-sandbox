/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	// n = 4
	let output = "1"; // 1
	for (let i = 1; i < n; i++) {
		// i = 1 to 3
		let count = 0; // 1
		let newOutput = ""; // ''
		// loop through output
		for (let j = 0; j < output.length; j++) {
			// j = 0 to 1
			count++;
			let currentDigit = output[j]; // 1
			let nextDigit = output[j + 1]; // undefined
			// if currentDigit is the same as previous, add to count
			if (currentDigit !== nextDigit) {
				// false
				newOutput = newOutput + count + currentDigit;
				count = 0;
			}
		}
		// output gets new output
		output = newOutput;
	}
	return output;
};

console.log(countAndSay(5))