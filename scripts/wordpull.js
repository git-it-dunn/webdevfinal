function dictionarypull(a){
    $.get("https://wordsapiv1.p.mashape.com/words/"+a+"/definitions", function(b){
        document.getElementById('dict').innerHTML = "<br> <p>Definitions: "+b+"</p> <br>";
    });
}