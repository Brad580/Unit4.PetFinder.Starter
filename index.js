// Import the pets array from data.js
const pets = require('./data');

// Init express app
const express = require('express');
const app = express();
const path = require('path');
const petsRoutes = require('./petsRoutes'); // Make sure this path is correct

const PORT = 8080;

// Use petsRoutes for any requests to /api/v1/pets
// Corrected the path here
app.use('/api/v1/pets', petsRoutes);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// GET - / - Returns homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// No need to define /api/v1/pets route here again as it's handled in petsRoutes

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
