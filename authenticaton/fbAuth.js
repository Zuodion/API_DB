const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const request = require('request');


router.post('/', async (req, res) => {
  const token = req.body.id_token;
  let tokenInfo = `https://graph.facebook.com/me?access_token=${token}`
  request(tokenInfo, function (error, response, body){
    if (response.statusCode === 200) {
        console.log('Facebook token OK');
        res.send('Facebook ok')
    } else {
      res.status(400).send('Invalid Facebook token')
      return console.log('Invalid Facebook token');
    }
  });
});



module.exports = router;
