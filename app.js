const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);

const fs = require('fs');
const Router = require("./core/router")
const router = new Router(app);

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
});