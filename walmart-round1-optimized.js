// prettier-ignore
let inputs = ["A", "B", "C", 1, 2, 3, "41", "5", 6, "@", "~", "D",'7E','F8','true', true, 'false', false, null, 'null', undefined, 'undefined'];
//* Split the string, integer, and special characters into new arrays.
//* Make sure 4 and 5 which is a string should be in integer array list and convert it to integer.

const letters = [];
const integers = [];
const specials = [];
const booleans = [];
const nulls = [];
const undefineds = [];
const mixed = [];

for (let input of inputs) {
	// if it's a number, add to integers array
	if (typeof input === "number") {
		integers.push(input);
		// else, it is a string
	} else if (input === "undefined" || input === undefined) {
		undefineds.push(undefined);
	} else if (input === "null" || input === null) {
		nulls.push(null);
	} else if (input === "true" || input === true) {
		booleans.push(true);
	} else if (input === "false" || input === false) {
		booleans.push(false);
	} else if (typeof input === "string") {
		let inputType;
		for (let char of input) {
			let currentType;
			// if the string is a letter, add it to letters array
			if (char.match(/[a-zA-Z]/)) {
				currentType = "letter";
				// if the string is a number, parse it into a number, then add to integers array
			} else if (char.match(/[0-9]/)) {
				currentType = "integer";
				// else the string is a special character, so add it to the special array
			} else {
				currentType = "special";
			}

			if (!inputType) {
				inputType = currentType;
			} else if (inputType !== currentType) {
				inputType = "mixed";
				break;
			}
		}
		switch (inputType) {
			case "letter":
				letters.push(input);
				break;
			case "integer":
				let parsedInt = parseInt(input);
				integers.push(parsedInt);
				break;
			case "special":
				specials.push(input);
				break;
			case "mixed":
				mixed.push(input);
				break;
		}
	}
}

console.log("this is letters: ", letters);
console.log("this is integers: ", integers);
console.log("this is specials: ", specials);
console.log("this is booleans: ", booleans);
console.log("this is nulls: ", nulls);
console.log("this is undefineds: ", undefineds);
console.log("this is mixed: ", mixed);

// problem 2 ===============================================================================================

let integer = [...Array(100000).keys()];
//  * Split it to 2 arrays with random elements and sum each array
//    example:
//           Output_1:
//             array_1 = [ 1,4,6 ]
//             array_2 = [ 2,3,5 ]

//           Output_2: Sum each array
//             array_1 = 11
//             array_2 = 10

const t1 = performance.now();

const length = integer.length;
let array_1;

// randomize integer array
function shuffle(array) {
	// have an index at the end and loop to the beginning
	for (let i = array.length - 1; i > 0; i--) {
		// pick a random index
		const randomIndex = Math.floor(Math.random() * (i + 1));
		// swap endIndex with randomIndex
		[array[randomIndex], array[i]] = [array[i], array[randomIndex]];
	}
}

shuffle(integer);

array_1 = integer.slice(0, Math.floor(integer.length / 2));

// array_2 gets what's left of the original array
let array_2 = integer.slice(Math.floor(integer.length / 2));

// get the sums of the new arrays
let sum_1 = array_1.reduce((total, current) => {
	return total + current;
});
let sum_2 = array_2.reduce((total, current) => {
	return total + current;
});

console.log(`Example array_1: `, array_1);
console.log(`Example array_2: `, array_2);
console.log(`Example sum_1: `, sum_1);
console.log(`Example sum_2: `, sum_2);


const t2 = performance.now();
console.log(t2 - t1);
