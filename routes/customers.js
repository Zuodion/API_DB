const {Customer} = require('../models/customer');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.get('/', async (req, res) => {
  let customers = await Customer.find().sort('name');
  res.send(customers);
});

router.post('/', async (req, res) => {
  let customer = new Customer(_.pick(req.body, ['name', 'isGold', 'phone']));
  customer = await customer.save();
  res.send(customer);
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
    let body = _.pick(req.body, ['name', 'isGold', 'phone']);
    try {
    let customer = await Customer.findByIdAndUpdate(req.params.id, {$set: body}, {new: true});
    if (!customer) {
        return res.status(404).send();
    }
    res.status(200).send({customer});
    } catch(e) {
        res.status(400).send();
    }
});

router.delete('/:id', async (req, res) => {
  let customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

router.get('/:id', async (req, res) => {
  let customer = await Customer.findById(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

module.exports = router; 