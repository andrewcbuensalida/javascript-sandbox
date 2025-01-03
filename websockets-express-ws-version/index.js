const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
var expressWs = require("express-ws")(app);

// Don't need this
// app.use(cors());

app.ws("/ws", (ws, req) => {
	const openaiWs = new WebSocket("ws://localhost:8766/ws");

	openaiWs.on("open", () => {
		ws.on("message", async (message) => {
			console.log(`Received from Twilio: ${message}`);
			openaiWs.send(message);
		});

		openaiWs.on("message", async (openaiMessage) => {
			openaiMessage = openaiMessage.toString();
			console.log(`Received from OpenAI: ${openaiMessage}`);
			if (openaiMessage === "tool") {
				openaiWs.send("trigger please wait");
			} else if (openaiMessage === "wait") {
				ws.send("wait");
				ws.send("typing");
				const results = await executeTools();
				openaiWs.send(results);
				ws.send("stop typing");
			} else {
				ws.send(openaiMessage);
			}
		});
	});

	async function executeTools() {
		console.log(`Executing tools at ${new Date()}`);
		await new Promise((resolve) => setTimeout(resolve, 5000));
		const toolResults = "sunny";
		console.log("Tools executed");
		return toolResults;
	}

	ws.on("close", () => {
		console.log("❌ websocket connection closed");
	});
});

app.listen(8765, () => {
	console.log("Server is listening on port 8765");
});
