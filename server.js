const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const rooms = new Map();

app.get("/rooms", (req, res) => {
  rooms.set();
  res.json(rooms);
});

io.on("connection", socket => {
  console.log("user connected", socket.id);
});

server.listen(1362, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Server running!");
});