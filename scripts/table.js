var wordList = ["Also","Able","Acid","Aged","Away","Baby","Back","Bake",
    "Bank","Been","Ball","Base","Busy","Beam","Bend","Best","Bell","Bird","Come","Came",
    "Calm","Card","Coat","City","Chat","Cash","Crow","Cook","Cool", "Cute"];

//this function is called at the start of the body section in wordsPage.html using onLoad="makeTable()"
//it doesnt work yet
//it needs to read Words.csv and populate the table with those words
function makeTable(){
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var wordCount = 0;

    table.appendChild(tbody);

    for (i = 0; i <= 5; i++) {
        var row = document.createElement("tr");
        for (j = 0; j <= 4; j++) {
            const td = document.createElement("td");
            var data = document.createTextNode(wordList[wordCount]);
            td.appendChild(data);
            row.appendChild(td);
            wordCount++;
        }
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    document.body.appendChild(table);
}
