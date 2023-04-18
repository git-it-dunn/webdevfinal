
//this function is called at the start of the body section in wordsPage.html using onLoad="makeTable()"
//it doesnt work yet
//it needs to read Words.csv and populate the table with those words
function makeTable(){
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    table.appendChild(tbody);
    var row = document.createElement("tr");

    for (i = 1; i < 3; i++) {
        var row = document.createElement("tr");
        for (j = 1; j < 3; j++) {
            var td = document.createElement("td");
            var data = document.createTextNode("Row " + i + ", Column " + j);
            td.appendChild(data);
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    document.getElementById("thetable").appendChild(table); 
}
