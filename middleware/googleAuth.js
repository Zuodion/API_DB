const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const https = require('https');



router.post('/', async (req, res) => {
  const token = req.body.id_token;
  let tokenInfo = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`
  request(tokenInfo, function (error, response, body){
    console.log('HTTPS request statusCode:' + res.statusCode);

  });
});



module.exports = router;
