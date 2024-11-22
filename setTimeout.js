function setTimeoutTest() {
	console.log("setTimeoutTest0");
	setTimeout(() => {
		console.log("setTimeoutTest1");
	}, 5000);
	setTimeout(() => {
		console.log("setTimeoutTest2");
	}, 5000);
	console.log("setTimeoutTest3");
}

setTimeoutTest();

