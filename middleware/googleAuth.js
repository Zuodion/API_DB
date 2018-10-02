const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '804233630975-8qdfrgfrh55dbgkbg5lk41ql8qmjukm6.apps.googleusercontent.com';

router.post('/', async (req, res) => {
const token = req.body;
console.log(token);
});

module.exports = router;
