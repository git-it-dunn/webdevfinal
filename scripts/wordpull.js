function dictionarypull(a){
    $.get("https://wordsapiv1.p.mashape.com/words/"+a+"/definitions", function(b){
        var temp = JSON.stringify(b);
        var data = JSON.parse(temp);
        document.getElementById('dict').innerHTML = "<br> <p>Definitions: "+data.Search[0].definition+"</p> <br>";
    });
}