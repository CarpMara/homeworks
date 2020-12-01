const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');
const socket = io();
document.getElementById('join-chat-button').addEventListener('click', function() {
    const input = document.getElementById('user-name-input');
    const userName = input.value;
    if (userName.length > 0) {
        document.getElementById('user-name-missing').classList.add('display-none');
        socket.emit('join-chat', userName);
    } else {
        document.getElementById('user-name-missing').classList.remove('display-none');
    }
})

socket.on('joined-chat', function() {
    const messagesContainer = document.getElementById('join');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
    console.log('You joined chat!');
    document.getElementById('join-chat').classList.add('display-none');
    document.getElementById('chat-container').classList.remove('display-none');
})

document.getElementById('send-message-button').addEventListener('click', function() {
    const input = document.getElementById('message');
    var getID = document.getElementById("ddlViewBy");
    var strUser = getID.options[getID.selectedIndex].text;
    var message = input.value;
    message = message.fontcolor(strUser);
    socket.emit('send-message', message);
    input.value = '';
})
document.getElementById('numberOfClients').addEventListener('click', function() {
    const input = document.getElementById('all');
    var message = input.value;
    socket.emit('getAll', message);
    input.value = '';
})
socket.on('eventToClient', function(data) {
    const input = document.getElementById('counter');
});
socket.on('new-message', function(message) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = message;
    messagesContainer.appendChild(messageElement);
})
document.getElementById('counter').addEventListener('click', function() {
    socket.emit('increment');
})

socket.on('increment', function(showCounter) {
    const getID = document.getElementById('showCounter');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = showCounter;
    getID.innerHTML = showCounter;
})
socket.on('get-All', function(all) {
    const getID = document.getElementById('all-clients');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = all;
    getID.innerHTML = all;
})

document.getElementById('leave-chat-button').addEventListener('click', function() {
    socket.emit('leave-chat');
    document.getElementById('chat-container').classList.remove('display-none');
})

socket.on('menu', function() {
    console.log('You left chat!');
    document.getElementById('join-chat').classList.remove('display-none');
    document.getElementById('chat-container').classList.add('display-none');
})

document.getElementById('create-game-button').addEventListener('click', function() {
    const input = document.getElementById('game-name-input');
    const gameName = input.value;
    if (gameName.length > 0) {
        document.getElementById('game-name-missing').classList.add('display-none');
        socket.emit('create-game', gameName);
    } else {
        document.getElementById('game-name-missing').classList.remove('display-none');
    }
})

socket.on('game-loop', function(objectsForDraw) {
    document.getElementById('join-chat').classList.add('display-none');
    document.getElementById('create-game-container').classList.add('display-none');
    document.getElementById('game-container').classList.remove('display-none');
    context.drawImage(document.getElementById('map-image'), 0, 0);
    objectsForDraw.forEach(function(objectForDraw) {
        context.drawImage(
            document.getElementById(objectForDraw.imageId),
            ...objectForDraw.drawImageParameters
        )
    })
})