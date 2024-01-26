var lengthOfLongestSubstring = function (s) {
	let charArray = [];
	let longestLength = 0;
	for (let i = 0; i < s.length; i++) {
		let currentChar = s[i];
		if (!charArray.includes(currentChar)) {
			charArray.push(currentChar);
		} else {
			let indexOfRepeatingChar = charArray.indexOf(currentChar);
			charArray = charArray.slice(
				indexOfRepeatingChar + 1,
				indexOfRepeatingChar.length
			);
			charArray.push(currentChar);
		}
		longestLength = Math.max(longestLength, charArray.length);
	}
	return longestLength;
};

console.log(
	`Example lengthOfLongestSubstring('dvdf'): `,
	lengthOfLongestSubstring("dvdf")
);
