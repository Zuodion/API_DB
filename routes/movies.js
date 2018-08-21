const {Movie} = require('../models/movie');
const {Genre} = require('../models/genre');
const express = require('express');
const router = express.Router();
const _ = require('lodash');


router.get('/', async (req, res) => {
    let movies = await Movie.find().sort('name');
    res.send(movies);
});

router.post('/', async (req, res) => {
    let genre = await Genre.findById(req.body.genre);
    if(!genre) return res.status(400).send('Invalid genre.');
    let movie = new Movie({
        title: req.body.title,
        genre: genre,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    movie = await movie.save();

    res.send(movie);
});

router.put('/:id', async (req, res) => {
    // let customer = await Customer.findById(req.params.id,
    //   {//через findbyId и save или set
    //     name: req.body.name,
    //     isGold: req.body.isGold,
    //     phone: req.body.phone
    //   }, {upsert: true, new: true});
    //
    // if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    //
    // res.send(customer);
    let genre = await Genre.findById(req.body.genre);

    let body = _.pick(req.body, ['title', 'genre', 'numberInStock', 'dailyRentalRate']);
    try {
        if (genre === null) {
            let movie = await Movie.findByIdAndUpdate(req.params.id, {$set: body}, {new: true});
            res.status(200).send({movie});
        } else {
            let movie = await Movie.findByIdAndUpdate(req.params.id, {$set: body, genre}, {new: true});
            res.status(200).send({movie});
        }
    } catch(e) {
        res.status(400).send();
    }
});

router.delete('/:id', async (req, res) => {
    let movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

router.get('/:id', async (req, res) => {
    let movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

module.exports = router;