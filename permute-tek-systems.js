
function generatePermutations(word) {
	const letterArray = word.split("");
	letterArray.sort();
	const permutations = [];
	const letterQuantity = {};
	for (let letter of letterArray) {
		if (letterQuantity[letter]) {
			letterQuantity[letter]++;
		} else {
			letterQuantity[letter] = 1;
		}
	}
	// console.log('this is letter quantity', letterQuantity)
	function recursion(permutation) {
		// console.log('this is permutation in recursion', permutation)
		// console.log('this is letterQuantity', letterQuantity)
		if (permutation.length === word.length) {
			permutations.push(permutation.join(""));
			// console.log('this is permutations in if', permutations)
			return;
		}
		for (let letter in letterQuantity) {
			// console.log('letter',letter)
			if (letterQuantity[letter] >= 1) {
				// console.log('this is letter', letter)
				letterQuantity[letter]--;
				permutation.push(letter);
				// console.log('this is permutation in if', permutation)
				recursion(permutation);
				letterQuantity[letter]++;
				// console.log('before popping')
				permutation.pop();
			}
		}
	}
	recursion([]);
	return permutations;
}

function rearrangeWord(word) {
	// console.log(word)
	const permutations = generatePermutations(word);
	// console.log('this is permutations', permutations)
	const index = permutations.indexOf(word);
	// console.log('this is index', index)
	if (index >= permutations.length - 1) {
		return "no answer";
	}
	return permutations[index + 1];
}

console.log('permutations',generatePermutations('padsfdshhdffgeerp'));