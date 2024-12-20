const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) =>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        //error condition
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create flights'
        });
    }

    next();//calling next middleware if above 'if' check will not execute
}

module.exports = {
    validateCreateFlight
}