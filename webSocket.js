const http = require("http");

const WebSocket = require("ws")

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on("connection", (WebSocket, request) => {
    console.log("Client Connected");

    WebSocket.on("message", (data) => {
        console.log("REcieved", data.toString());
    });

    WebSocket.on("close", () => {
        console.log("Client DisConnected");
    })

})

server.listen(3003, () => {
    console.log("WebSocket server is running on port 3003")
})