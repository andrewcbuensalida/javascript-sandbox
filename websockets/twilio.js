const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
// app.use(cors()); // Don't need this

const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: "/sending_message" });

wss.on("connection", (ws, req) => {
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
});

app.get("/", (req, res) => {
	res.json({ message: "Server is running" });
});

server.listen(8767, () => {
  console.log("Server is running on http://0.0.0.0:8767");
});
