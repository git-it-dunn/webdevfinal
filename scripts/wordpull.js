// var unirest = require('unirest');
function dictionarypull(a){
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'f4e1640476mshdb930a1bc0b6df0p141dc5jsn5751248fbbca',
    //         'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://wordsapiv1.p.rapidapi.com/words/.22-caliber/pertainsTo', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    $.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+a, function(b){
        var mean = b[0].meanings;
        var defs = mean[0].definitions;
        var def = defs.definition;
        var ex = defs.example;
        document.getElementById('dict').innerHTML = "<br> <p>Definition: "+defs.definition+"</p> <br> <br> <p>Example use: "+defs.example+"</p> <br>";
    });
}