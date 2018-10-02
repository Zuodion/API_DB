const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

router.post('/', async (req, res) => {
  CLIENT_ID = req.body;
  verify().catch(console.error);
  if(!error) console.log('OK GOOGLE')
  
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
      });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
  };

  module.exports = router;

});
