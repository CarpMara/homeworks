import { Animal } from './animal.js';

const canvas = document.getElementById("canvasId");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

const geoerge = new Image();
geoerge.src = 'assets/george.png'
const GEORGE_WIDTH = 40;
const GEORGE_HEIGHT = 45;
let georgeX = 100;
let georgeY = 100;
let marioX = 0;
let marioY = 0;
geoerge.onload = () => {
    context.drawImage(geoerge, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, 100, 100, GEORGE_WIDTH, GEORGE_HEIGHT)
}

const mario = new Image();
mario.src = 'assets/mario.png'
const MARIO_WIDTH = 32;
const MARIO_HEIGHT = 39;
mario.onload = () => {
    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, 0, 0, MARIO_WIDTH, MARIO_HEIGHT)
}

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this);
    context.fillStyle = "green";
    context.fillRect(480, 20, 40, 20);
});

document.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, 600, 400);
    switch (event.key) {
        case 'ArrowUp':
            {
                if (georgeY > 0)
                    georgeY -= 10;
                break;
            }
        case 'ArrowDown':
            {
                if (GEORGE_HEIGHT <= canvas.height - georgeY)
                    georgeY += 10;
                break;
            }
        case 'ArrowLeft':
            {
                if (georgeX > 0)
                    georgeX -= 10;
                break;
            }
        case 'ArrowRight':
            {
                if (GEORGE_WIDTH <= canvas.width - georgeX)
                    georgeX += 10;
                break;
            }
        case 'w':
            {
                if (marioY > 0)
                    marioY -= 10;
                break;
            }
        case 's':
            {
                if (MARIO_HEIGHT <= canvas.height - marioY)
                    marioY += 10;
                break;
            }
        case 'a':
            {
                if (marioX > 0) {
                    marioX -= 10;
                }
                break;
            }
        case 'd':
            {

                if (MARIO_WIDTH <= canvas.width - marioX) {
                    marioX += 10;
                }
                break;
            }

    }


    context.drawImage(mario, 0 * MARIO_WIDTH, 0 * MARIO_HEIGHT, MARIO_WIDTH, MARIO_HEIGHT, marioX, marioY, MARIO_WIDTH, MARIO_HEIGHT);
    context.drawImage(geoerge, 0 * GEORGE_WIDTH, 0 * GEORGE_HEIGHT, GEORGE_WIDTH, GEORGE_HEIGHT, georgeX, georgeY, GEORGE_WIDTH, GEORGE_HEIGHT)
});