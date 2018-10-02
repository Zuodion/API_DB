const express = require('express');
const router = express.Router();
const telegramCheckingAuthorization = require('telegram-checking-authorization');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const _ = require('lodash');


router.get('/', (req, res) => {
  res.send('Hi')
});

router.post('/', (req, res) => {
  // let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
  console.log(req.body);
  // if(telegramCheckingAuthorization(data, token)) alert('Data is from telegram!');
  // if(!telegramCheckingAuthorization(data, token)) alert('Data is NOT from telegram :(')

});
module.exports = router;
