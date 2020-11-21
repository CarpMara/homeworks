const canvas = document.getElementById("cId");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext('2d');

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    context.fillStyle = colors[getRandom(0, colors.length)];
    context.fillRect(getRandom(0, canvas.width - 40), getRandom(0, canvas.height - 40), 40, 40);
    //I put the value '(canvas.width/height)-40 to set boundaries for the square'
});
const colors = [ //and I also generated random colors
    'blue',
    'red',
    'orange',
    'yellow',
    'green',
    'black',
    'white'
]

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}