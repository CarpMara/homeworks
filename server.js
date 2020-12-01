const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const Player = require('./Player.js');
const Game = require('./Game.js');
var counter = 0;
const PLAYER_DIM = 32;
module.exports.PLAYER_DIM = PLAYER_DIM;

http.listen(5000, function() {
    console.log('[SERVER STARTED AT PORT 5000]');
})

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log('[SOCKET CONNECTED]' + socket.id);

    socket.on('join-chat', function(userName) {
        chatUsers[socket.id] = userName;
        io.to('chat').emit('new-message', `${chatUsers[socket.id]} join chat`);
        console.log('[USER JOINED CHAT]', socket.id, userName);
        socket.join('chat');
        socket.emit('joined-chat');

    })
    socket.on('event_name', function(data) {
        io.sockets.emit('eventToClient', counter);
        socket.broadcast.emit('eventToClient', counter);
        socket.emit('eventToClient', counter);
    })
    socket.on('increment', function(showCounter) {
        counter++;
        socket.emit('increment', counter);
    })

    socket.on('send-message', function(message) {
        console.log('[USER SENT MESSAGE]', message);
        io.to('chat').emit('new-message', `${chatUsers[socket.id]}: ${message}`);
    })

    socket.on('getAll', function(all) {
        io.to('chat').emit('getAll', Object.keys(chatUsers).length);
        console.log('[GETALL USERS]', Object.keys(chatUsers).length);
        socket.emit('get-All', `${Object.keys(chatUsers).length}`);

    })
    socket.on('leave-chat', function() {
        io.to('chat').emit('new-message', `${chatUsers[socket.id]} left chat`);
        console.log('[USER LEFT CHAT]', socket.id);
        delete chatUsers[socket.id];
        socket.leave('chat');
        socket.emit('menu');
    })

    socket.on('create-game', function(gameName) {
        console.log('[NEW GAME CREATED]');
        const gameId = 'game-' + socket.id;
        const players = [new Player()];
        const game = new Game({
            id: gameId,
            players: players
        });
        games[gameId] = game;
        console.log('[User joined ' + gameId + '] room');
        socket.join(gameId);
    })
})

function gameLoop(id) {
    const objectsForDraw = [];
    games[id].players.forEach(function(player) {
        objectsForDraw.push(player.forDraw());
    })
    io.to(id).emit('game-loop', objectsForDraw);
}
module.exports.gameLoop = gameLoop;
const chatUsers = {};
const games = {};