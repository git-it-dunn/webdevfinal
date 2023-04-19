function dictionarypull(a){
    unirest.get("https://wordsapiv1.p.mashape.com/words/"+a+"/definitions").header("X-Mashape-Key", "f4e1640476mshdb930a1bc0b6df0p141dc5jsn5751248fbbca").end(function(b){
        var temp = JSON.stringify(b);
        var data = JSON.parse(temp);
        document.getElementById('dict').innerHTML = "<br> <p>Definitions: "+data.Search[0].definition+"</p> <br>";
    });
}