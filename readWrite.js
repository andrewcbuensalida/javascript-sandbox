const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// this will overwrite if already exists
fs.writeFile(path.join(__dirname, "testWrite.txt"), "test", (error) => {
	if (error) throw "asdf";

	// this adds to the existing file, or creates the file if it doesn't exist. Put this inside writeFile because it is async, meaning we don't know exactly what will happen first. Alternatively, could use sync version or fsPromises
	fs.appendFile(path.join(__dirname, "testWrite.txt"), "2222", (error) => {
		if (error) throw "asdf";
	});
});

// ================================================
fs.writeFileSync(path.join(__dirname, "syncWrite.txt"), "test");
fs.appendFileSync(path.join(__dirname, "syncWrite.txt"), "3333");


// =================================================
(async () => {
	await fsPromises.writeFile(
		path.join(__dirname, "promiseWrite.txt"),
		"test"
	);
	await fsPromises.appendFile(
		path.join(__dirname, "promiseWrite.txt"),
		"444"
	);
})();
