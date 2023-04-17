// Import express. Supported by Node.js, lets us include modules in our project.
let express = require('express');

// Import a local .js file
// let my_module = require('./localfile.js')

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

// Setup a static server for all files in /public
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


// A handler for a specific page on our site
// This response to GET requests.
app.get('/flags/canada.html', (request, response) => {
    console.log('canada.html file accessed!');
    response.send('canada.html file accessed!');
});

// First handler, then pass on with next()
app.use('/html', (req, res, next) => {
    // Do some processing
    console.log('HTML file being generated');
    // Pass request to the next() handler
    next();
});

// Generate a valid HTML page when someone visits /html
app.get('/html', (req, res) => {
    // Don't do this normally, we will use templates
    res.send(`
<html>
    <body>
        <div>This is our HTML page, after next().</div>
    </body>
</html>`);
});

// Request data localhost:3000/hello?name=print_me
app.get('/hello', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Hello ${name}, your age is ${age}!`);
});

// Serve a static HTML
app.get('/cats', (req, res) => {
    // Not neccessary - better to setup static routing (see dogs.html)
    res.sendFile(__dirname + '/cats.html');
});

// Handle web-form login
app.get('/processLogin', (req, res) => {
    console.log(req.query);
    res.send('Done processing login - with GET');
});

// The better way to handle form data
app.post('/processLogin', (req, res) => {
    // Doesn't work for POST commands. We need to use express.urlencoded()
    // console.log(req.query);

    // Use with extender
    console.log(req.body);
    res.send('Done processing login - with POST');
});


// Setup our homepage - localhost:3000 now returns this message
app.get('/', (req, res) => {
    res.send('pp');
});
