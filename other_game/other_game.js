// code retireved from https://www.w3schools.com/graphics/canvas_intro.asp then modified

var myCharacter;

function startGame() {
    gameArea.start()
    myCharacter = new character(); 
    myTarget = new target();
    myScore = new score();
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d")
        this.canvas.style.cursor = "none"
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        // sets the interval of frame rate 
        this.frames = setInterval(updateScreen, 15)

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

    this.update = function() {
        contx = gameArea.context;
        contx.fillStyle = "red";
        contx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.hover = function() {
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var bottom = this.y + (this.height);
        var hovered = true;
        if ((bottom < gameArea.y) || (top > gameArea.y) || (right < gameArea.x) || (left > gameArea.x)) {
            hovered = false;
        }
        return hovered;
    }

}

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

function updateScreen() {

    var xRandPosition = Math.floor(Math.random() * (650 - 0 + 1)) + 1; 
    var yRandPosition = Math.floor(Math.random() * (350 - 0 + 1)) + 1;
    var hits = 0;

    gameArea.clear();

    myScore.text = "HITS: "

    if (gameArea.x && gameArea.y) {

        myCharacter.x = gameArea.x;
        myCharacter.y = gameArea.y;

        if(myTarget.hover()) {

            myTarget.x = xRandPosition;
            myTarget.y = yRandPosition;
            
            hits += 1
            myScore.text = "HITS: " + hits

        } 
        
    }
    
    myTarget.update();
    myScore.update();
    myCharacter.update();
    
}


