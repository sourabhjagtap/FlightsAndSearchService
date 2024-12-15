const express = require('express');
const cityController = require('../../controllers/city-controller');

const router = express.Router();

// Route for creating a city
router.post('/city', cityController.create);

// Route for deleting a city by ID
router.delete('/city/:id', cityController.destroy);

// Route for fetching a city by ID
router.get('/city/:id', cityController.get);

// Route for updating a city by ID
router.patch('/city/:id', cityController.update);

// Route for fetching all cities
router.get('/city', cityController.getAll);

module.exports = router;

