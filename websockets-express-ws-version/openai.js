const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
var expressWs = require("express-ws")(app);

// app.use(cors()); // Don't need this

app.ws("/ws", (ws) => {
	ws.on("message", async (message) => {
		message = message.toString();
		console.log(`Received from fake: ${message}`);
		if (message === "get weather") {
			console.log("Sending tool");
			ws.send("tool");
		} else if (message === "trigger please wait") {
			ws.send("please");
			await new Promise((resolve) => setTimeout(resolve, 1000));
			ws.send("wait");
		} else {
			console.log("in else");
			ws.send(`Message is ${message}`);
		}
	});
	ws.on("close", () => {
		console.log("❌ websocket connection closed");
	});
});

app.listen(8766, () => {
	console.log("Server is listening on port 8766");
});
