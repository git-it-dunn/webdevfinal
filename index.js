// Import express. Supported by Node.js, lets us include modules in our project.
let express = require('express');

// Import a local .js file
// let my_module = require('scripts/game.js')

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
    res.sendFile(__dirname + 'html/mainpage.html');
});
