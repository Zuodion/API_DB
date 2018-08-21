const mongoose = require('mongoose');
const Customer = require('./customer');
const Movie = require('./movie');

let rentalSchema = new mongoose.Schema({
    customer: {
        type: Customer
    },
    movie: {
        type: Movie

    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0
    }
});
let Rental = mongoose.model('Rental', rentalSchema);

module.exports = {Rental};