window.onload = function() {
    fetch('Words.csv')
    .then((response) => response.text())
    .then(function(content) {
        console.log("words")
        var Word = document.getElementById('gamesWord');
        let chosenWord = 10;
            
        let rows = content.split('\n');

        Word.setAttribute('value', rows[chosenWord]);
    })
}