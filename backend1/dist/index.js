"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
    ws.on("error", (err) => {
        console.log(err);
    });
    ws.on("message", (message) => {
        console.log(`Received message => ${message}`);
        ws.send(`Received message => ${message}`);
    });
});
