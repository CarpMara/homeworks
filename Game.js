const Player = require('./Player.js');
let server = require('./server');

class Game {
    constructor(options) {
        this.id = options.id
        this.players = options.players
        this.start();
    }
    start() {
        const that = this;
        setInterval(function() { server.gameLoop(that.id) }, 1000 / 60);
    }

}
module.exports = Game;