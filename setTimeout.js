function setTimeoutTest() {
	console.log("setTimeoutTest0");
	setTimeout(() => {
		console.log("setTimeoutTest1");
	}, 0);
	setTimeout(() => {
		console.log("setTimeoutTest2");
	}, 0);
	console.log("setTimeoutTest3");
}

setTimeoutTest();

const x = [1,2,3]
console.log(x.length);

const y = '1234'
console.log(y.length);

const z = Math.pow(12,23)
console.log(`Example z: `, z)
