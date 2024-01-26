async function run() {
	const myPromise = new Promise((resolve, reject) => {
		const mybool = false;
		if (mybool) {
			resolve("you are resolved");
		} else {
			reject("you are rejected");
		}
	});
	const result = await myPromise
		.then(
			(r) => r
			// (e) => e
		)
		.catch((e) => "you are catched");
	console.log(`Example result: `, result);
}

run();
