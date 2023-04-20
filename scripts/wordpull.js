function dictionarypull(a){
    $.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+a, function(b){ //pulls json file from link, a variable is word function gets desc of
        var mean = b[0].meanings;       
        var defs = mean[0].definitions;        //this and last line are path to definition and example in json file
        var def = defs[0].definition;
        var ex = defs[0].example;       
        document.getElementById('dict').innerHTML = "<br> <p>Definition: "+JSON.stringify(def)+"</p> <br>";     //prints out into object with 'dict' id. also stringifys definition
    });
}