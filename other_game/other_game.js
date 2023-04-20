// code retireved from https://www.w3schools.com/graphics/canvas_intro.asp then modified

var myCharacter;

function startGame() {
    // creating elements
    gameArea.start()
    myCharacter = new character(); 
    myTarget = new target();
    myScore = new score();
}

// game board
var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d")
        this.canvas.style.cursor = "none"
        document.body.insertBefore(this.canvas, document.body.childNodes[2])
        // sets the interval of frame rate 
        this.frames = setInterval(updateScreen, 10)

        // computing mouse movevements
        window.addEventListener('mousemove', function(event) {
            gameArea.x = event.pageX;
            gameArea.y = event.pageY;
        })
        
        // computing mouse hover
        window.addEventListener('click', function(event) {
            gameArea.x = event.pageX;
            gameArea.y = event.pageY;
        })
    },

    // clear function so there is no trail when character is drwan
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

// creates square that follows cursor
function character() {
    this.x = 20;
    this.y = 380;
    this.width = 20;
    this.height = 20;
    this.xSpeed = 0;
    this.ySpeed = 0;

    // draws the character in the update fucntion so that it can be called many times a second
    this.update = function() {
        contx = gameArea.context;
        contx.fillStyle = `rgb(29, 242, 5)`;
        contx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function target() {
    this.x = 200;
    this.y = 200;
    this.width = 80;
    this.height = 80;

    // draws the character in the update fucntion so that it can be called many times a second
    this.update = function() {
        contx = gameArea.context;
        contx.fillStyle = "red";
        contx.fillRect(this.x, this.y, this.width, this.height);
    }

    // function gets location of mouse and detects the hovering
    this.hover = function() {
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var bottom = this.y + (this.height);
        var hovered = true;

        // determines of the square has touched the target
        if ((bottom < gameArea.y) || (top > gameArea.y) || (right < gameArea.x) || (left > gameArea.x)) {
            hovered = false;
        }
        return hovered;
    }

}

// score text
function score() {
    this.x = 600;
    this.y = 30;
    this.width = "25px";
    this.height = "Arial";

    this.update = function() {
        contx = gameArea.context;
        contx.font = this.width + " " + this.height;
        contx.fillText(this.text, this.x, this.y)  
    }
}

// creates the elements on screen 
function updateScreen() {

    // variables for random target movement
    var xRandPosition = Math.floor(Math.random() * (650 - 0 + 1)) + 1; 
    var yRandPosition = Math.floor(Math.random() * (350 - 0 + 1)) + 1;

    // variables for hits 
    var hits = 0;

    // clears everything 
    gameArea.clear();

    // score text
    myScore.text = "HITS: "

    if (gameArea.x && gameArea.y) {

        // makes the square follow the mouse
        myCharacter.x = gameArea.x;
        myCharacter.y = gameArea.y;

        if(myTarget.hover()) {

            // randomizes position of target after hovered over 
            myTarget.x = xRandPosition;
            myTarget.y = yRandPosition;
            
            // increments hit counter
            hits += 1
            myScore.text = "HITS: " + hits

        } 
        
    }
    
    // updates the screen by drawing the elements 
    myTarget.update();
    myScore.update();
    myCharacter.update();
    
}


