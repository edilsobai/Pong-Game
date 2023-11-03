const server = require('http').createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5500", // Замените на URL вашей веб-страницы
    methods: ["GET", "POST"] // Методы, которые разрешены
  }
});

const PORT = 5000;

let playersReadyCount = 0

server.listen(PORT, () => console.log(`Running on port ${PORT}...`));

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  
  socket.on("ready", () => {
    console.log("Player ready", socket.id)
    playersReadyCount++
  })
  if(playersReadyCount === 2) {
    io.emit("startGame", socket.id)
  } 
});
