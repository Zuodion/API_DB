const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

router.post('/', async (req, res) => {
const token = req.body.id_token;
if (token){
  app.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`, (res, res) => {
    if res.status(200) console.log('GOOGLE OK');
  })
}

});

module.exports = router;
