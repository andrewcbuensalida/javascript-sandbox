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

let integer = [...Array(11).keys()];
//  * Split it to 2 arrays with random elements and sum each array
//    example:
//           Output_1:
//             array_1 = [ 1,4,6 ]
//             array_2 = [ 2,3,5 ]

//           Output_2: Sum each array
//             array_1 = 11
//             array_2 = 10


const t1 = performance.now()
const length = integer.length;
let array_1;
let array_2;

// fisher yates shuffle
for (let i = integer.length - 1; i > 0; i--) {
	const randomIndex = Math.floor(Math.random() * (i + 1));
	[integer[randomIndex], integer[i]] = [integer[i], integer[randomIndex]];
}

console.log(`Example integer: `, integer);

array_1 = integer.slice(0, integer.length / 2);
array_2 = integer.slice(integer.length / 2);

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

const t2 = performance.now()
console.log(t2-t1);
