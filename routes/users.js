const tokenAuth = require('../middleware/tokenAuth');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');
const hbs = require('hbs');

router.get('/', async (req, res) => {
  
  let users = await User.find().sort('name');
  let usersNames = users.map(function (obj) {
      return '\n'+obj.name;
  });

  res.render('registration.hbs', {
          pageTitle: 'Registration',
          users: usersNames
  });
})

router.post('/', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered');

    user = new User (_.pick(req.body, ['name', 'email', 'password', 'isAdmin']));

    let salt = await bcrypt.genSalt(10);//генерируется "замок"
    user.password = await bcrypt.hash(user.password, salt);//"замок" вешается на user.password
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));//при регистрации юзера создается токен в headers
});



router.get('/me', tokenAuth, async (req, res) => {//tokenAuth возращает юзера с таким токеном
    let user = await User.findById(req.user).select('-password');//пароль не покажет
    res.send(user)
});

module.exports = router;
