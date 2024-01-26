const myPromise = new Promise((resolve, reject) => {
	if (false) {
		resolve("Resolved!!!");
	} else {
		reject("Rejected!!!");
	}
});

async function runPromise() {
	const result = await myPromise
		.then(
			(value) => {
				console.log(`1Example value: `, value);
				return value;
			},
			// If there is this second function, this catches the error and it doesn't go to .catch anymore
			(value) => {
        console.log(`2Example value: `, value);
        throw 'thrown'
				return value;
			}
		)
		.catch((reason) => {
			console.log(`Example reason: `, reason);
			return reason;
		})
		.finally(() => {
			console.log(`in finally`);
      return 'from in finally'
		});
	console.log(`Example result: `, result);
}

runPromise();
