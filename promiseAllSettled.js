async function main() {
	const prom1 = new Promise((resolve, reject) => {
		resolve("resolve1");
	});
	// const prom2 = new Error('err') // this fulfills with value error
	const prom2 = new Promise((resolve, reject) => {
    resolve('resolve1')
		// throw "Threww2"; // this makes status rejected
		reject("reject2"); // this makes status rejected
	})
		.then(
			(res) => {
        throw new Error('then error')
        return res
      },
			// () => { // this fulfills
			// 	return "then reject";
			// }
		)
		.catch((e) => {
			// if there's a catch, promise will fulfill
			return e;
		});
	const all = await Promise.allSettled([prom1, prom2]); // returns an object for each promise. Each object has status, and value if status is fulfilled, or reason if status is rejected
	console.log(all);
}

main();
