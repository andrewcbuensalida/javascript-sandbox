const a = [1, 2, 3, 3, 2];

const r = [1, 3, 6, 9, 11];

const answer = a.reduce((acc, cur) => {
	let sum = (acc.at(-1) ?? 0) + cur;
	acc.push(sum);
	return acc;
}, []);


const b = [5,2,3,1]

