import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", function connection(ws) {
  console.log("websocket connected", ws);
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    wss.clients.forEach(function each(client) {
      // if (client.readyState === WebSocketServer.OPEN) {
      client.send(data);
      // }
    });
  });
});

console.log("server start");
