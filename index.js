// //setup for mongodb database (given when a database is created on the website)
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:xRPEQom9cQb9DfGW@worl-cluster.qpg19ho.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// ^ setup is unfinished as the login functionality needed to be completed in order to use the database

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

//i love APIs so much
var unirest = require('unirest');

// Use environment variable specified at command line, or if none provided, 3000 default
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log(`Listening for requests on port ${app.get('port')}.`);
});


// Setup our homepage - localhost:3000 now returns this message
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/mainpage.html');
});

app.get('/scripts/maingamepage.js', (req, res) => {
    res.sendFile(__dirname + '/scripts/maingamepage.js');
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

app.get('/stylesheets/login.css', (req, res) => {
    res.sendFile(__dirname + '/stylesheets/login.css');
});

app.get('/html/wordsPage.html', (req, res) => {
    res.sendFile(__dirname + '/html/wordsPage.html');
});

app.get('/html/mainpage.html', (req, res) => {
    res.sendFile(__dirname + '/html/mainpage.html');
});

app.get('/html/stats.html', (req, res) => {
    res.sendFile(__dirname + '/html/stats.html');
});

app.get('/html/group_members.html', (req, res) => {
    res.sendFile(__dirname + '/html/group_members.html');
});

app.get('/html/login.html', (req, res) => {
    res.sendFile(__dirname + '/html/login.html');
});

app.get('/other_game/other_game.html', (req, res) => {
    res.sendFile(__dirname + '/other_game/other_game.html');
});

app.get('/other_game/other_game.css', (req, res) => {
    res.sendFile(__dirname + '/other_game/other_game.html');
});

app.get('/other_game/other_game.js', (req, res) => {
    res.sendFile(__dirname + '/other_game/other_game.html');
});

