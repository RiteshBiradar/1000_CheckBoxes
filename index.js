const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve('./public')));

let checkboxStates = {};

io.on("connection", (socket) => {
    socket.emit("initial-state", checkboxStates);

    socket.on("checkbox-changed", (data) => {
        checkboxStates[data.id] = data.checked; 
        io.emit("checkbox-changed", data); 
    });
});

app.get('/', (req, res) => {
   res.sendFile(path.resolve('./public/index.html'));  
});

server.listen(8000, () => {
    console.log('Server listening at http://localhost:8000');
});
