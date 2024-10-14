async function myFunc() {
	const myPromise = await new Promise((resolve, reject) => {
		// return "hello"; // this doesn't do anything
		// throw new Error("Threeewww"); // goes to .then's second function if there is one. If not, goes to catch err
		if (true) {
			resolve("It is true"); // goes to myPromise if no .then
		} else {
			reject("It is false"); // errors if no .then, goes to catch err if no second function in then
		}
	})
		// .then(
		// 	(res) => {
		// 		throw new Error("resolve throw"); // goes to catch err
		// 		return res; // goes to myPromise
		// 	},
		// 	// (res) => {
		// 	//   throw new Error('reject throw') // goes to catch err
		// 	// 	return "bye"; // goes to myPromise
		// 	// }
		// )
		// .catch((err) => {
		// 	console.log(err.message);
		// 	return "It errored";
		// });
	console.log(myPromise);
}

myFunc();
