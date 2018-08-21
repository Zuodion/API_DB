const mongoose = require('mongoose');
const {Rental} = require('../models/rental');
const {Customer} = require('../models/customer');
const {Movie} = require('../models/movie');
const express = require('express');
const lodash = require('lodash');
const Fawn = require('fawn');
Fawn.init(mongoose);
const router = express.Router();

router.get('/', async (req, res) => {
    let rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async (req, res) => {
    try {
    let customer = await Customer.findById(req.body.customer);
    let movie = await Movie.findById(req.body.movie);
    if (!customer || !movie) return res.status(404).send('Customer or movie with this ID cannot found');
    let rental = new Rental({
        customer: customer,
        movie: movie
    });
        // rental = await rental.save();
        // movie.save();
        // movie.numberInStock--;
        new Fawn.Task()//2 face commits, делает новую коллекцию, которая по сути эдакий буфер
            .save('rentals', rental)
            .update('movies', {_id: movie._id}, {
                $inc: {numberInStock: -1}
            })
            .run();
        res.send(rental);
    } catch (e) {
        res.status(400).send();
    }

});

router.delete('/:id', async (req, res) => {
    let rental = await Rental.findByIdAndRemove(req.params.id);

    if (!rental) return res.status(404).send('The rental with the given ID was not found.');

    res.send(rental);
});

router.get('/:id', async (req, res) => {
    let rental = await Rental.findById(req.params.id);

    if (!rental) return res.status(404).send('The rental with the given ID was not found.');

    res.send(rental);
});
module.exports = router;