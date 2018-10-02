const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

router.post('/', async (req, res) => {
const token = req.body.id_token;
console.log(token)
res.send(token)
});

module.exports = router;
