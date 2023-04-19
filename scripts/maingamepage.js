window.onload = function(){
    makingWordlboxes();
    makingKeyboard();
}

function makingKeyboard(){
    let keys = "Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M".split(',');
    let input = "Backspace,Enter".split(',');

    let temp = 0;
    for (let r = 0; r < 13; r++) {
        for (let c = 0; c < 2; c++) {
            let bord = document.createElement("div");
            bord.id = r.toString() + "-" + c.toString();
            bord.innerText = keys[temp];
            bord.classList.add("letter");
            document.getElementById("keyboard").append(bord);
            temp++;
        }
    }

    for (let i = 0; i < input.length; i++){
        let inputButton = document.createElement("div");
        inputButton.id = i;
        inputButton.innerText = input[i];
        inputButton.classList.add("inputButtonLetters");
        document.getElementById("keyboard").appendChild(inputButton);
    }
}

function makingWordlboxes(){
    let word = "word";
    for (let i = 0; i < 4; i++){
        let wordle = document.createElement("div");
        wordle.id = i;
        wordle.innerText = word[i];
        console.log(wordle.innerText[0])
        wordle.classList.add("letter");
        document.getElementById("theWord").appendChild(wordle);
    }

    for (let i = 0; i < 4; i++){
        let wordle = document.createElement("div");
        wordle.id = i;
        wordle.innerText = word[i];
        console.log(wordle.innerText[0])
        wordle.classList.add("letter");
        document.getElementById("theWord").appendChild(wordle);
    }
}