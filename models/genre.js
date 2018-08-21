const mongoose = require('mongoose');
const Joi = require('joi');

let genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  }
});
let Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
  let schema = {
    name: Joi.string().min(2).max(50).required()
  };
  return Joi.validate(genre, schema)
}
module.exports = {Genre, validateGenre};