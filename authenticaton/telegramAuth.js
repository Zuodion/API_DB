const express = require('express');
const router = express.Router();
const telegramCheckingAuthorization = require('telegram-checking-authorization');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


router.post('/', (req, res) => {
  let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
  let data = req.body;
  if(telegramCheckingAuthorization(data, token)){
    res.send('Telegram auth OK')
    console.log('Telegram auth OK')
  };
  if(!telegramCheckingAuthorization(data, token)){
    console.log('Ivalid telegram data')
    return res.status(400).send('Ivalid telegram data')
  };
});
module.exports = router;
