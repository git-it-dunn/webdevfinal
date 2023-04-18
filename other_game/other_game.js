
var myCharacter;

function startGame() {
    gameArea.start()
    myCharacter = new character(); 
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

        // computing keypresses
        window.addEventListener('mousemove', function(event) {
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
        contx.fillStyle = "red";
        contx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function updateScreen() {

    gameArea.clear();

    if (gameArea.x && gameArea.y) {
        myCharacter.x = gameArea.x;
        myCharacter.y = gameArea.y;
    }

    myCharacter.update();
}


