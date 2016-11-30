// sets up various modeules I will need to run the server
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

// sets up the app and tells the server what port to listen on
var app = express();
var port = process.env.port || 3000;

//sets up the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//creates a variable to test charts in userscores and highscors
var users = {
    "bob": {
        "userName": "bob123",
        "score": "12345"
    },
    "don": {
        "userName": "donE",
        "score": "2"
    }
}

//statically serves files from public
app.use(express.static(path.join(__dirname, 'public')));

//rendres the index page
app.get('/', function (req, res) {
    res.render('index-page', {
        pageTitle: 'Welcome!'
    });
});

//renders the highscores page
app.get('/high-scores', function (req, res) {
    res.render('highscore-page', {
        user: users,
        pageTitle: 'High-Scores'
    });
});

//renders the userscores page
app.get('/user-scores', function (req, res) {
    res.render('userscore-page', {
        pageTitle: 'test',
        user: users,
        userName: 'Poop'
    });
});

//renders the pong page
app.get('/pong', function (req, res) {
    res.render('pong-page', {
        pageTitle: 'PongZone',
        userName: 'Test'
    });
});

//render the 404 page for any page that doesn't exists
app.get('*', function (req, res) {
    res.status(404).render('404-page', {
        pageTitle: '404'
    });
});

// tells the server to listen on the specified port
app.listen(port, function () {
    console.log("==Listening on port ", port)
});
