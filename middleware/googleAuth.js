const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();


router.post('/', async (req, res) => {
const token = req.body.id_token;
  tokenInfo(token)
});
function tokenInfo(token){
  app.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`, (req, res) => {
    if (res.status === 200) {
      console.log('Google ok')
    } else {
      console.log('Google not ok')
    }
  })
}

module.exports = router;
