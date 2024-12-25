console.log((async () => {
	console.log("This is a self-invoking async function.");
	return "Hello from the self-invoking async function.";
})());