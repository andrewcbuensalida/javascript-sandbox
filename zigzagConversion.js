/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1 || s.length < numRows) return s;
	let mainArray = [];
	let currentRowIterator = 0;
	let isReverse = false;
	// loop through s
	for (let i = 0; i < s.length; i++) {
		// if there's no row yet, create it
		if (!mainArray[currentRowIterator]) {
			mainArray[currentRowIterator] = [];
		}
		// add char to row array
		mainArray[currentRowIterator].push(s[i]);
		isReverse ? currentRowIterator-- : currentRowIterator++;
		if (currentRowIterator === numRows - 1 || currentRowIterator === 0)
			isReverse = !isReverse;
	}
	// console.log(mainArray);
	// loop through rows
	for (let i = 0; i < mainArray.length; i++) {
		// join first row
		mainArray[i] = mainArray[i].join("");
	}
	// join all rows
	let result = mainArray.join("");
	// return
	return result;
};

// console.log(`Example
// convert('ab',1): `,
// convert('ab',1))
