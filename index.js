const winston = require('winston');
const express = require('express');
const fs = require('fs');
const app = express();
const hbs = require('hbs');
const {Genre, validateGenre} = require('./models/genre');
const mongoose = require('mongoose');


require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/prod')(app);
app.set('view engine', 'hbs');

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

app.get('/', (req, res) => {

    res.render('home.hbs', {
        pageTitle: 'Home page',
        WelcomeMessage: 'Welcome!'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects',
    })
});

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;
