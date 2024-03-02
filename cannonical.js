// # Alternative calculator assignment

// An "alternative calculator" assignment to be used as a coding challende in DevSkiller.

// ## Description

// We'd like you to write a calculator to perform basic arithmetic, but using an alternative syntax for writing the expressions.

// In this alternative notation, the operators precede the operands. For example while in traditional notation we might write `3 + 4`, instead we would write `+ 3 4`.

// The main advantage of this format is that it does not require parentheses for any ambiguous expression.

// | Traditional notation    | Alternative notation |
// | ----------------  | --------------- |
// | 3 + 4             | + 3 4           |
// | 3 - (4 * 5)       | - 3 * 4 5       |
// | (3 + 4) * 5       | * + 3 4 5       |
// | (3 - 4) / (5 + 2) | / - 3 4 + 5 2   |

// In the code provided, the `app/calculator.js` file exports a `calculate` function. This function is expected to take an alternative expression as a string, and output the numerical solution.

// We have included some tests to check this function works as expected.

// To run the code:

// ```
// npm install  # install dependencies
// npm start    # use the calculator with an interactive prompt
// npm test     # run the tests
// ```

// Please implement the `calculate` function to solve expressions in the alternative format as expected.

exports.calculate = function (expression) {
	// turn string to array
	const array = expression.split(" ");
	let i = array.length - 1;
	// while pointer isn't at the beginning
	while (i >= 0) {
		// look for the right most operator
		if (array[i] === "+") {
			// operate the 2 numbers to the right of that
			// replace the element with the result of the operation
			array[i] = Number(array[i + 1]) + Number(array[i + 2]);
			array.splice(i + 1, 2);
		} else if (array[i] === "-") {
			array[i] = Number(array[i + 1]) - Number(array[i + 2]);
			array.splice(i + 1, 2);
		} else if (array[i] === "/") {
			array[i] = Number(array[i + 1]) / Number(array[i + 2]);
			array.splice(i + 1, 2);
		} else if (array[i] === "*") {
			array[i] = Number(array[i + 1]) * Number(array[i + 2]);
			array.splice(i + 1, 2);
		}
		// move pointer to left
		i--;
	}
	return array[0];
};

