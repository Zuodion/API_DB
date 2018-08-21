const winston = require('winston');

function errorHandling(err, req, res, next) {
    winston.log(err.message, err);

    res.status(500).send('Something failed');
}

module.exports = errorHandling;