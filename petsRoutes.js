// Importing Express and creating a router
const express = require('express');
const router = express.Router();

// Importing the pets array from data.js
const pets = require('./data');

// GET - Get all pets from the database
router.get('/', (req, res) => {
    res.json(pets);
});

// GET - Get pets by owner's name with query string
router.get('/owner', (req, res) => {
    const owner = req.query.owner.toLowerCase();
    const petsByOwner = pets.filter(pet => pet.owner.toLowerCase() === owner);

    if (petsByOwner.length) {
        res.json(petsByOwner);
    } else {
        res.status(404).send('No pets found for this owner');
    }
});

// GET - Get pet by name
router.get('/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const pet = pets.find(pet => pet.name.toLowerCase() === name);

    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }
});

// Exporting the router
module.exports = router;
