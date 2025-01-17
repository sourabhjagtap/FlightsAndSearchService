const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const cityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
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

// Route for creating a flight
router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);

router.get('/flights', FlightController.getAll);

router.get('/flights/:id',FlightController.get);

router.patch('/flights/:id',FlightController.update);

router.post('/airports', AirportController.create);

module.exports = router;

