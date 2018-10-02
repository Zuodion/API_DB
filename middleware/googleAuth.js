const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

router.post('/', async (req, res) => {
  verify().catch(console.error);
  next();
});

async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      /* audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]*/
    });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  /* If request specified a G Suite domain:
  const domain = payload['hd'];*/
};

module.exports = router;