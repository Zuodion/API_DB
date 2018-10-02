const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../authenticaton/auth');
const errorHandling = require('../middleware/errorHandling');
const googleAuth = require('../middleware/googleAuth');
const telegramAuth = require('../routes/telegramAuth')

function routes(app) {//app - то что функция берет с экспресса
  app.use(express.json());
  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/googleAuth', auth);
  app.user('/telegramAuth', telegramAuth);
  app.use(errorHandling);
}

module.exports = routes;
