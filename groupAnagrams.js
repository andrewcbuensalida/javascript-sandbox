/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let arrayOfAnagrams = [];
	// loop through strs
	for (let i = 0; i < strs.length; i++) {
		let currentStr = strs[i];
		// loop through array of anagram arrays that have the same length as current str
		let sameLengthAnagrams = arrayOfAnagrams.filter(
			(anagrams) => anagrams[0].length === currentStr.length
		);
		// if there are no saved anagrams of the same length as currentStr, create a new anagrams array
		if (sameLengthAnagrams.length === 0) {
			arrayOfAnagrams.push([currentStr]);
			continue;
		}
		let isAnagram = null;
		// loop through sameLengthAnagrams
		for (let j = 0; j < sameLengthAnagrams.length; j++) {
			let savedAnagram = sameLengthAnagrams[j][0];
			// edge case if currentStr is '' and savedAnagram is '', add currentStr to that array
			if (currentStr.length === 0 && savedAnagram.length === 0) {
				sameLengthAnagrams[j].push(currentStr);
				isAnagram = true;
				break;
			}
			// loop through char in current str
			for (let k = 0; k < currentStr.length; k++) {
				let currentChar = currentStr[k];
				// if saved anagram includes current char, replace that char with dash to track if it has been used already
				if (savedAnagram.includes(currentChar)) {
					savedAnagram = savedAnagram.replace(currentChar, "");
				} else {
					// else current char is not in saved anagram, therefore break the loop
					break;
				}
				// if has reached the end of currentStr, that means current str is an anagram of that anagram array, so push it
				if (k === currentStr.length - 1) {
					sameLengthAnagrams[j] =
						sameLengthAnagrams[j].push(currentStr);
					isAnagram = true;
				}
			}
			if (isAnagram) break;
		}
		// if current str was not pushed into an anagram array, create a new anagram array
		if (!isAnagram) {
			arrayOfAnagrams.push([currentStr]);
		}
	}
	// return array of anagram arrays
	return arrayOfAnagrams;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["", ""]));

// let x = 'abc'
// let y = x
// y = y.replace('b','')
// console.log(`Example x: `, x)
// console.log(`Example y: `, y)
