const validateObjectId = require('../middleware/validateObjectId');
const tokenAuth = require('../middleware/tokenAuth');
const adminRights = require('../middleware/adminRights');
const {Genre, validateGenre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const hbs = require('hbs');


router.get('/', async (req, res) => {
    let genres = await Genre.find().sort('name');
    let genresNames = genres.map(function (obj) {
        return '\n'+obj.name;
    });
    res.render('genres.hbs', {
            pageTitle: 'Genres',
            genres: genresNames

    });
});

router.post('/', async (req, res) => {

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
});

router.put('/:id', [tokenAuth, validateObjectId], async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    });

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.delete('/:id', [tokenAuth, adminRights, validateObjectId], async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

router.get('/:id', validateObjectId, async (req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    res.send(genre);
});

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
router.use(express.static('../public'));

module.exports = router;
