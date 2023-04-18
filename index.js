// Import express. Supported by Node.js, lets us include modules in our project.
let express = require('express');

// Import a local .js file
//let my_module1 = require('./scripts/game.js')
//let my_module2 = require('./scripts/wordpull.js')
//let my_module3 = require('./scripts/mainpage.js')

// Instantiate express application
let app = express();

// app.listen(3000, function() {
//     console.log(`Listening for requests on port 3000.`);
// });


// Use environment variable specified at command line, or if none provided, 3000 default
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log(`Listening for requests on port ${app.get('port')}.`);
});


// Setup our homepage - localhost:3000 now returns this message
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/mainpage.html');
});

app.get('/scripts/game.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/game.js');
});

app.get('/scripts/wordpull.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/wordpull.js');
});

app.get('/scripts/mainpage.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/mainpage.js');
});

app.get('/stylesheets/mainpage.css', (req, res) => {
    res.sendFile(__dirname + '/stylesheets/mainpage.css');
});

app.get('/html/wordsPage.html', (req, res) => {
    res.sendFile(__dirname + '/html/wordsPage.html');
});

app.get('/html/mainpage.html', (req, res) => {
    res.sendFile(__dirname + '/html/mainpage.html');
});