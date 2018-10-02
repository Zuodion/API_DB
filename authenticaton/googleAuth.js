const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const https = require('https');
const request = require('request');


router.post('/', async (req, res) => {
  const token = req.body.id_token;
  let tokenInfo = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
  request(tokenInfo, function (error, response, body){
    if (response.statusCode === 200) {
        console.log('Google token OK');
    } else {
      res.status(400).send(''Invalid Google token'')
      return console.log('Invalid Google token');
    }
  });
});



module.exports = router;
