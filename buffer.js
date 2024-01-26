const { Buffer } = require("node:buffer");

const buffer = Buffer.from("test");
console.log(`Example buffer: `, buffer);

const string = buffer.toString();
console.log(`Example string: `, string);

const base64 = buffer.toString("base64");
console.log(`Example base64: `, base64);

const bufferAgain = Buffer.from(base64, "base64");
console.log(`Example bufferAgain: `, bufferAgain)

