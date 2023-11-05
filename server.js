const http = require('http')
const io = require("socket.io")


const apiServer = require("./api")
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer)

const sockets = require("./sockets")

const PORT = 5000;

httpServer.listen(PORT, () => console.log(`Running on port ${PORT}...`));

sockets.listen(socketServer)


