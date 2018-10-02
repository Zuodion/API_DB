const express = require('express');
const router = express.Router();
const telegramCheckingAuthorization = require('telegram-checking-authorization');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get('/', (req, res) => {
  res.send('Hi')
});

router.post('/', jsonParser, (req, res) => {
  let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
  if(!req.body) return res.sendStatus(400);
  console.log('lol' + req.body);
  response.json(req.body.user)
  // if(telegramCheckingAuthorization(data, token)) alert('Data is from telegram!');
  // if(!telegramCheckingAuthorization(data, token)) alert('Data is NOT from telegram :(')

});
module.exports = router;
