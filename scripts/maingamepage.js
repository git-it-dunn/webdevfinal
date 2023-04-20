var word = "WORD";

var lSel;

l1 = Boolean(false);
l2 = Boolean(false);
l3 = Boolean(false);
l4 = Boolean(false);

let keys = "Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M, ".split(',');
let numFail = 0;

window.onload = function(){
    document.getElementById("Fail").innerText = numFail;
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
    console.log("this.is:"+ this.id);
    console.log("lSel.id:"+ lSel.id);
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
            //Win
            console.log("pp");
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

        console.log(l1);
        console.log(l2);
        console.log(l3);
        console.log(l4);

        this.innerText = keys[lSel.id];
        document.getElementById("Fail").innerText = numFail;
    }
}

function letterSel(){
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