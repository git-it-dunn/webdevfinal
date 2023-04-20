// var word = "WORD";
var word;

var lSel;

l1 = Boolean(false);
l2 = Boolean(false);
l3 = Boolean(false);
l4 = Boolean(false);

let keys = "Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M, ".split(',');
let numFail = 0;

window.onload = function(){
    //auto mainpage creation
    document.getElementById("Fail").innerText = numFail;
    getRandomWord();
    makingWordlboxes();
    makingKeyboard();
    togglePopup();
    
}



function getRandomWord(){
    var wordList = ["Also","Able","Acid","Aged","Away","Baby","Back","Bake",
    "Bank","Been","Ball","Base","Busy","Beam","Bend","Best","Bell","Bird","Come","Came",
    "Calm","Card","Coat","City","Chat","Cash","Crow","Cook","Cool","Cute"];

    let randomWordNumber = Math.floor((Math.random() * 30) + 1);
    console.log("random number is: " + randomWordNumber);
    word = (wordList[randomWordNumber]).toUpperCase();

    console.log(word);
}


function makingKeyboard(){
    //This creates the makeshift keyboard at the bottom of the game and gives all the clicking on the letters abilitys to work
    for (let a = 0; a < keys.length; a++) {
        let bord = document.createElement("div");
        bord.id = a;
        bord.innerText = keys[a];
        bord.addEventListener("click", letterSel);
        bord.classList.add("letter");
        document.getElementById("keyboard").append(bord);
    }
    
}

function makingWordlboxes(){
    // Creating the 4 boxes for you
    for (let j = 0; j < 4; j++){
        let worl = document.createElement("div");
        worl.id = j;
        worl.addEventListener("click", select);
        worl.classList.add("letter");
        document.getElementById("theWord").append(worl);
    }
}


function select() {
    // allows you to click on the four boxes you want to fill with the word
    // will add 1 to numFail if you add the wrong letter to the box
    // if letter is in the correct spot it will set that that letter
    // is correct and if you get them all correct you will get a pop up 
    // saying you win
    if (word[this.id] == keys[lSel.id] || keys[lSel.id] == " ") {
        this.innerText = keys[lSel.id];
        if(this.id == 0){
            l1 = Boolean(true);
        }else if(this.id == 1){
            l2 = Boolean(true);
        }else if(this.id == 2){
            l3 = Boolean(true);
        }else if(this.id == 3){
            l4 = Boolean(true);
        }

        console.log(l1);
        console.log(l2);
        console.log(l3);
        console.log(l4);

        if(l1 && l2 && l3 && l4){
            togglePopup2()
            dictionarypull(word)
            console.log("Winner Winner Chicken Dinner");
        }


    }else if (word[this.id] != keys[lSel.id]){
        numFail++;
        if(this.id == 0){
            l1 = Boolean(false);
        }else if(this.id == 1){
            l2 = Boolean(false);
        }else if(this.id == 2){
            l3 = Boolean(false);
        }else if(this.id == 3){
            l4 = Boolean(false);
        }
        if(numFail == 20){
            togglePopup3()
            console.log("You Lose!");
        }

        console.log(l1);
        console.log(l2);
        console.log(l3);
        console.log(l4);

        this.innerText = keys[lSel.id];
        document.getElementById("Fail").innerText = numFail;
    }
}

function letterSel(){
    //allows you to pick from the letters in the keyboard at the bottom of your screen
    if (lSel) {
        lSel.classList.remove("letterSelect");
    }   
    lSel = this;
    lSel.classList.add("letterSelect");
    // if(lSel.id == (keys.length-1)){
        
    // }else if(lSel.id != (keys.length-1)){
    //     lSel.classList.add("letterSelect");
    // }
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
    document.getElementById("popup3").classList.toggle("active");
}
