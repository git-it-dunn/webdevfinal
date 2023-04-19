let word = "WORD";
var lSel = null;

let keys = "Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,Enter".split(',');
let numFail = 0;

window.onload = function(){
    makingWordlboxes();
    makingKeyboard();
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
    for (let i = 0; i < 4; i++){
        let wordle = document.createElement("div");
        wordle.id = i;
        // wordle.innerText = word[i];
        wordle.classList.add("letter");
        document.getElementById("theWord").appendChild(wordle);
    }

    for (let j = 0; j < 4; j++){
        let worl = document.createElement("div");
        worl.id = j;
        worl.addEventListener("click", select);
        worl.classList.add("letter");
        document.getElementById("theWord").append(worl);
    }
}


function select() {
    if (lSel && lSel.id != (keys.length-1)) {
        this.innerText = keys[lSel.id]; 
    }
}

function letterSel(){
    if (lSel) {
        lSel.classList.remove("letterSelect");
    }
    lSel = this;
    if(lSel.id == (keys.length-1)){

    }else if(lSel.id != (keys.length-1)){
        lSel.classList.add("letterSelect");
        console.log("wordle.id");
    }
}