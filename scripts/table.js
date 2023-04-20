//DHTML Stuff in here
var wordList = ["Also","Able","Acid","Aged","Away","Baby","Back","Bake",
    "Bank","Been","Ball","Base","Busy","Beam","Bend","Best","Bell","Bird","Come","Came",
    "Calm","Card","Coat","City","Chat","Cash","Crow","Cook","Cool", "Cute"];

//this function is called at the start of the body section in wordsPage.html using onLoad="wordTable()"
function wordTable(){
    //creates table and table body
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
    var wordCount = 0;

    //generates table cells
    for (i = 0; i <= 5; i++) {
        //creates a row
        var x = document.createElement("tr");

        for (j = 0; j <= 4; j++) {
            //creates a data cell
            const td = document.createElement("td");
            var word = document.createTextNode(wordList[wordCount]);

            //appends word to data cell then appends data cell to row
            td.appendChild(word);
            x.appendChild(td);
            
            //counts through wordList array
            wordCount++;
        }
        tbody.appendChild(x);
    }
    
    //appends table body to table
    table.appendChild(tbody);

    //appends table to HTML body
    document.body.appendChild(table);
}
