let input = ["A", "B", "C", 1, 2, 3, "4", "5", 6, "@", "~", "D"];

//* Split the string, integer, and special characters into new arrays.
//* Make sure 4 and 5 which is a string should be in integer array list and convert it to integer.

const letters = [];
const integers = [];
const special = [];

for (let current of input) {
	// if it's a number, add to integers array
	if (typeof current === "number") {
		integers.push(current);
		// else, it is a string
	} else {
		// if the string is a letter, add it to letters array
		if (current.match(/[a-zA-Z]/)) {
			letters.push(current);
			// if the string is a number, parse it into a number, then add to integers array
		} else if (current.match(/[0-9]/)) {
			integers.push(parseInt(current));
			// else the string is a special character, so add it to the special array
		} else {
			special.push(current);
		}
	}
}

// console.log(letters)
// console.log(integers)
// console.log(special)

// problem 2 ===============================================================================================

let integer = [...Array(100000).keys()];

// let integer = [1, 2, 3, 4, 5, 6];
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
let array_1 = [];

// loop until original integer array is half its length
while (integer.length > length / 2) {
  // get a random element and remove it from original integer array
	let randomIndex = Math.floor(Math.random() * integer.length);
	let randomElement = integer[randomIndex];
	integer.splice(randomIndex, 1);

  // add that random element to array_1
	array_1.push(randomElement);
}

// array_2 gets what's left of the original array
let array_2 = integer;

// get the sums of the new arrays
let sum_1 = array_1.reduce((total, current) => {
	return total + current;
});
let sum_2 = array_2.reduce((total, current) => {
	return total + current;
});

// console.log(`Example array_1: `, array_1);
// console.log(`Example array_2: `, array_2);
// console.log(`Example sum_1: `, sum_1);
// console.log(`Example sum_2: `, sum_2);

const t2 = performance.now();
console.log(t2 - t1);
