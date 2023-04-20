var fileDataObject = $.csv.toObjects('../Words.csv');

var fileData = Object.values(fileDataObject);

console.log(fileData);
//this function is called at the start of the body section in wordsPage.html using onLoad="makeTable()"
//it doesnt work yet
//it needs to read Words.csv and populate the table with those words
function makeTable(){
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    table.appendChild(tbody);

    for (i = 1; i <= 6; i++) {
        var row = document.createElement("tr");
        for (j = 1; j <= 5; j++) {
            const td = document.createElement("td");
            var data = document.createTextNode("Row " + i + ", Column " + j);
            td.appendChild(data);
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
    document.body.appendChild(table);
}
