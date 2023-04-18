window.onload = function(){
    let word = "word";
    for (let i = 0; i < 4; i++){
        let wordle = document.createElement("input");
        wordle.id = i;
        wordle.innerText = word[i]
        wordle.classList.add("letter")
        document.getElementById("theWord").appendChild(wordle);
    }
}