const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const request = require('request');


router.post('/', async (req, res) => {
  const token = req.body.fbtoken;
  let tokenInfo = `https://graph.facebook.com/me?access_token=${token}`
  request(tokenInfo, function (error, response, body){
    if (response.statusCode === 200) {
        console.log('Facebook auth OK');
        res.send('Facebook auth OK')
    } else {
      res.status(400).send('Invalid Facebook token')
      return console.log('Invalid Facebook token');
    }
  });
});



module.exports = router;
