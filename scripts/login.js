//login functionality (not working & not finished)

//posts request to server and recieves response
app.post('/login', (req, res) => {
    let username = req.body.formRow.Username;
    let password = req.body.formRow.Password;

    if (username != 'test' && password != 'test') {
        res.send('Login Failed');
    }
    else {
        res.send('Login Success');
    }
})