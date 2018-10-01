const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
      },
    email: {
        type: String,
        minlength: 5,
        maxlength: 255,
        required: true,
        unique: true,
      },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
      },
    isAdmin: Boolean,

  });

userSchema.methods.generateAuthToken = function () {
    return token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
    //генерация токен для юзера с таким id, с добавлением приватного ключа
  };

let User = mongoose.model('User', userSchema);

module.exports = { User };
