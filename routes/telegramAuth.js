const express = require('express');
const router = express.Router();
const telegramCheckingAuthorization = require('telegram-checking-authorization');

router.post('/', (req, res) => {
  let token = "631428444:AAGB1Ot057LQ-tu-EgQ2BREgXw9m3_wfiuU";
  let data = JSON.parse(req.data);
  console.log(data)
  if(telegramCheckingAuthorization(data, token)) alert('Data is from telegram!');
  if(!telegramCheckingAuthorization(data, token)) alert('Data is NOT from telegram :(')

});
module.exports = router;
