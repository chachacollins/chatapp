const http = require("http");
const io = require("socket.io");

const server = http.createServer((req, res) => {
    res.end("hello wrld");

});

const port = 3000;

server.listen(port, () => {
    console.log("server is listening on port 3000")
})


const ioServer = io.listen(server);

ioServer.on('connection', (socket) => {

  console.log('New client connected');
  socket.on('message', (message) => {
    console.log(`Received message from client: ${message}`);
    ioServer.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

