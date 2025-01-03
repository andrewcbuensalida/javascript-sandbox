const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
var expressWs = require("express-ws")(app);
// app.use(cors()); // Don't need this

app.ws("/sending_message", (ws, req) => {
	console.log("Connected to postman");
	const fakeWs = new WebSocket("ws://localhost:8765/ws");

	fakeWs.on("open", () => {
		ws.on("message", (message) => {
			console.log(`Received from postman: ${message}`);
			fakeWs.send(message);
		});

		fakeWs.on("message", (fakeMessage) => {
			console.log(`Received from fake at ${new Date()}: ${fakeMessage}`);
			ws.send(fakeMessage.toString());
		});
	});

	ws.on("close", () => {
		console.log("❌ websocket connection closed");
	});
});

app.ws("/test", (ws) => {
	ws.on("message", (message) => {
		message = message.toString();
		console.log(`Received from postman: ${message}`);
		ws.send("Your message is " + message);
	});
	ws.on("close", () => {
		console.log("❌ websocket connection closed");
	});
});

app.get("/", (req, res) => {
	res.json({ message: "Server is running" });
});

app.listen(8767, () => {
	console.log("Server is running on http://0.0.0.0:8767");
});
