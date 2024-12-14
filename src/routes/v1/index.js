const express = require('express');
const CityController = require('../../controllers/city-controller');


const router = express.Router();

router.post('/city' , CityController.create); // API -> /v1/city
router.delete('/city/:id',CityController.destroy);
//here 'city/:id' is written bcz our city-controller.js contain 'req.params.id' in which "id" is wirtten in destroy so both must be same i.e id == id do not change the name
router.get('city/:id' , CityController.get);//need to write the function
router.patch('city/:id',CityController.update);//need to write the function
module.exports = router;
