const server = require('http').createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5500", // Замените на URL вашей веб-страницы
    methods: ["GET", "POST"] // Методы, которые разрешены
  }
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Running on port ${PORT}...`));

io.on("connection", (socket) => {
  console.log("a user connected");
});
