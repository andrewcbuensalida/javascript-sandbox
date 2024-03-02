// wrong

var countGroups = function (related) {
	let total = 0;
	// split string to array
	// related = related.map((row) => row.split(""));
	console.log(related);
	// loop through related rows
	for (let i = 0; i < related.length; i++) {
		// loop through related columns
		for (let j = 0; j < related[0].length; j++) {
			// if it's a 1, add to total groups, convert to x, recurse to adjacents, else do nothing
			if (related[i][j] === 1) {
				total++;
				convertAdjacentToX(i, j);
			}
		}
	}
	function convertAdjacentToX(row, column) {
		console.log("row", row);
		console.log("column", column);
		if (related[row] && related[row][column] === 1) {
			related[row][column] = "x";
			// right
			convertAdjacentToX(row, column + 1);
			// bottom
			convertAdjacentToX(row + 1, column);
			// left
			convertAdjacentToX(row, column - 1);
			// top
			convertAdjacentToX(row - 1, column);
			// partner
			convertAdjacentToX(column, column);
			// self
			convertAdjacentToX(row, row);
			convertAdjacentToX(column, row);
		}
	}
	console.log(
		"related after double for loops",
		related.map((row) => row.map((col) => col + ""))
	);
	console.log("total", total);
	return total;
};

countGroups([
	[1, 0, 0, 1],
	[0, 1, 1, 0],
	[0, 1, 1, 1],
	[1, 0, 1, 1],
]); // expected 1

const output = [
	(["x", "0", "0", "0", "0", "0", "x", "0", "0", "0"],
	["0", "x", "0", "0", "0", "x", "0", "0", "0", "x"],
	["0", "0", "x", "0", "x", "0", "0", "0", "0", "0"],
	["0", "0", "0", "x", "0", "0", "0", "0", "0", "0"],
	["0", "0", "x", "0", "x", "0", "0", "0", "0", "0"],
	["0", "x", "0", "0", "0", "x", "0", "0", "0", "0"],
	["x", "0", "0", "0", "0", "0", "x", "0", "0", "0"],
	["0", "0", "0", "0", "0", "0", "0", "x", "0", "0"],
	["0", "0", "0", "0", "0", "0", "0", "0", "x", "0"],
	["0", "x", "0", "0", "0", "0", "0", "0", "0", "x"]),
];
