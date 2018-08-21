const mongoose = require('mongoose');
const Genre = require('./genre');

let movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255
    },
    genre: {
        type: Genre
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
});
let Movie = mongoose.model('Movie', movieSchema);


module.exports = {Movie};