/*
when req comes to the controller it will pass all the data to the service 
and repository layer and response from this layer give it back to controller 
then controller forms a respomse structure and give ot back to the user
*/

const { CityServices } = require('../services/index');

const cityService = new CityServices();

const create = async (req, res) => {//post request
    try {
        const city = await cityService.createCity(req.body);//user data is in request.body
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            error: error
        });
    }
};

//DELETE request  (URL -> /city/:id)
const destroy = async (req, res) => {
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            error: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            error: error
        });
    }
};

//GET request  (URL -> /city/:id)
const get = async (req, res) => {
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            error: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            error: error
        });
    }
};

//PATCH   (URL -> /city/:id [id will represent whivh city want to update] , request body will hold the data want to update ) 
const update = async (req, res) => {
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            error: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            error: error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update
};
