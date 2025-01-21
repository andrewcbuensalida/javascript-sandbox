const article = "dog dog cat mouse";

function wordCount(article, topN) {
	const words = article.split(" ");
	const map = {};
	console.log(words);

	for (let i = 0; i < words.length; i++) {
		const currentWord = words[i];
		if (map[currentWord]) {
			map[currentWord]++;
		} else {
			map[currentWord] = 1;
		}
	}

	// convert to array
	const wordCountArray = Object.entries(map);
	console.log(wordCountArray);
	// sort on value
	wordCountArray.sort((a, b) => {
		return b[1] - a[1];
	});

	console.log(wordCountArray);
	// slice topN
	const topNWords = wordCountArray.slice(0, topN);

	return topNWords;
}

const result = wordCount(article, 1);
console.log(result);

// {dog:2,cat:1,mouse:1}
// ['dog']
