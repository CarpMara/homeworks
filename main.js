const canvas = document.getElementById("ecran");
/**@type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function() {
    var x = random(50);
    var y = random(50);
    context.fillStyle = "blue";
    context.fillRect(x, y, 50, 50);
}
const mario = new Image();
mario.src = './mario2.png';
let marioX = 0;
let marioY = 0;
const marioWidth = 50;
const marioHeight = 70;
mario.onload = () => {
    context.drawImage(mario, 0 * marioWidth, 0 * marioHeight, marioWidth, marioHeight, 0, 0, marioWidth, marioHeight)
}
document.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, 600, 600);

    switch (event.key) {
        case 'w':
            {
                if (marioY >= 0)
                    marioY -= 10;
                break;
            }
        case 's':
            {
                if (marioY <= 600)
                    marioY += 10;
                break;
            }
        case 'a':
            {
                if (marioX >= 0)
                    marioX -= 10;
                break;
            }
        case 'd':
            {
                if (marioX <= 600)
                    marioX += 10;
                break;
            }
    }
    context.drawImage(mario, 0 * marioWidth, 0 * marioHeight, marioWidth, marioHeight, marioX, marioY, marioWidth, marioHeight);

});