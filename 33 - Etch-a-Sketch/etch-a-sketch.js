// Select the elements on the page - canvas, shake button
// The Canvas API provides a means for drawing graphics via JavaScript and HTML <canvas>
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 30; // this is a true constant so we choose to write it UPPER_CASE with underscore

// Setup our canvas for drawing
// make a variable called height and width from the html canvas properties of 1600 x 1000
const { width } = canvas; // destructured 'short form' version of 'const = canvas.width;'
const { height } = canvas; // fetches height and width

// use 'Math.random' to create a random number between 0 and 1
// use with 'Math.floor' to round down to a random whole integer t
// generate variables x and y from random whole integer
// use x and y as variables for our start position on the canvas.
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// rounds off the lines we draw on the canvas, properties of the canvas rendering context ctx
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// set start position using our randomly generated variables for x and y
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // sets the  start of the start position on the canvas
ctx.lineTo(x, y); // sets the end of our start position on the canvas
ctx.stroke(); // strokes the position

// write a draw function
// { key } is a destructured version of options object so we don't have to use options.key
function draw({ key }) {
        // increment the hue
        hue += 1;
        // console.log(hue);
        ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        // console.log(key);
        // start the path
        ctx.beginPath();
        ctx.moveTo(x, y);
        // move our x and y values depending on what the user did
        // switch-statement is alternative to and easier to read than if-statement in this case
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT; // short-form version of 'y = y - move amount'
                        break; // keyword break stops the switch from running and moves to next line
                case 'ArrowRight':
                        x += MOVE_AMOUNT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT;
                        break;
                default:
                        break;
        }
        ctx.lineTo(x, y);
        ctx.stroke();
}

// write a function that will listen for and handle the key events
function handleKey(e) {
        if (e.key.includes('Arrow')) {
                // isolates 'Arrow' key event
                e.preventDefault(); // stops the page scrolling on keystroke
                draw({ key: e.key }); // hands off the key to the 'draw' function above
        }
}

// clear/shake function
function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        canvas.addEventListener(
                'animationend',
                function () {
                        console.log('Done the shake!');
                        canvas.classList.remove('shake');
                },
                { once: true }
        );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

// listen for clear /shake function
shakebutton.addEventListener('click', clearCanvas);
