function login(page) {
    var userName = page.Username.value;
    var password = page.Password.value;
    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open("post", "login", true);

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            loginResults();
        }
    }
}

app.post('/login', (req, res) => {
    let username = req.body.formRow.Username;
    let password = req.body.formRow.Password;

    if (username === 'user' && password === 'user') {
        res.send('Login successful');
    }
    else {
        res.send('Login failed');
    }
})