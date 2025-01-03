const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
// app.use(cors()); // Don't need this

// To have multiple paths for different websockets, do noServer:true. If you have just one path, set the server here.
const wss1 = new WebSocket.Server({ noServer: true, path: "/sending_message" });

wss1.on("connection", (ws, req) => {
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

const wss2 = new WebSocket.Server({ noServer: true, path: "/test" });

wss2.on("connection", (ws) => {
	ws.on("message", (message) => {
		message = message.toString();
		console.log(`Received from postman: ${message}`);
		ws.send("Your message is " + message);
	});
});

app.get("/", (req, res) => {
	res.json({ message: "Server is running" });
});

// Alternative to this, could do server.listen() with http.createServer(app)
const server = app.listen(8767, () => {
	console.log("Server is running on http://0.0.0.0:8767");
});

// To have multiple paths for different websockets, we need to use the server's upgrade event
server.on("upgrade", function upgrade(request, socket, head) {
	const { pathname } = new URL(request.url, "wss://base.url");

	if (pathname === "/sending_message") {
		wss1.handleUpgrade(request, socket, head, function done(ws) {
			wss1.emit("connection", ws, request);
		});
	} else if (pathname === "/test") {
		wss2.handleUpgrade(request, socket, head, function done(ws) {
			wss2.emit("connection", ws, request);
		});
	} else {
		socket.destroy();
	}
});
