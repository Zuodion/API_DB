const express = require('express');
const router = express.Router();
const telegramCheckingAuthorization = require('telegram-checking-authorization');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

router.get('/', (req, res) => {
  res.send('Hi')
});

router.post('/', (req, res) => {
  let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
  let data = req.body;
  if(telegramCheckingAuthorization(data, token)){
    res.send('Data is from telegram!')
    console.log('Data is from telegram!')
  };
  if(!telegramCheckingAuthorization(data, token)){
    return res.status(400).send('Ivalid telegram data')
    console.log('Ivalid telegram data')
  };
  console.log('lol')
});
module.exports = router;
