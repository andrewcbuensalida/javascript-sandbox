const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server,path: "/ws" });

// app.use(cors()); // Don't need this

wss.on("connection", (ws) => {
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
      console.log('in else')
			ws.send(`Message is ${message}`);
		}
	});
});

server.listen(8766, () => {
	console.log("Server is listening on port 8766");
});
