const express = require("express");
var http = require("http");
const cors = require("cors");
const { Socket } = require("socket.io");
const app = express();
const port = process.env.port || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server,{
    cors:
    {
        origin:"*"
    }
});

app.use (express.json());
app.use(cors());
io.on("Connection",(Socket)=> {
    console.log("connected");
});

server.listen(port, () => {
    console.log("sever started");
});