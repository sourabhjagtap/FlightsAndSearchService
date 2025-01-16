const {Flights} = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{

    #createFilter(data){//# shows the private member method
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        
        //let x,y;
        //to find the flights between [minPrice , maxPrice]
        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and]: [
                    { price : {[Op.lte]: data.maxPrice} },
                    { price:  {[Op.gte]: data.minPrice} }
                ]
            })
        }

        //to find the flights having price greater than equal to minPrice
        if(data.minPrice){
            //x = data.minPrice;
            Object.assign(filter,{price : {[Op.gte]:data.minPrice}});
        }
        //to find the flights having price less than equal to maxPrice
        if(data.maxPrice){
            //y = data.maxPrice;
            Object.assign(filter,{price : {[Op.lte]:data.maxPrice}});
        }

        // if((data.minPrice) && (data.maxPrice)){
        //     Object.assign(filter,{price : {[Op.between] : [x, y]}});
        // }
        

        return filter;
    }

    async createFlight(data){
        try{
            const flight =await Flights.create(data);
            return flight;
        }catch(error){
            console.log("Something went wrong at repository layer");
            throw(error);
        }
    }

    async getFlight(flightId){
        try {

            if (!flightId || isNaN(flightId)) {
                throw new Error('Invalid flight ID provided');
            }

            const flight = await Flights.findOne({
                where: {
                    id: flightId
                }
            });
            return flight;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }


    async getAllFlights(filter){
        try {

            const filterObject = this.#createFilter(filter);

            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try {
            await Flights.update(data,{
                where: {
                    id:flightId
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw {error};
        }
    }
}

module.exports = FlightRepository;

/** (example of how filter can be for the getAllFlights)
 * {
 *      where: {
 *          arrivalAirportId: 2,
 *          departureAirportId: 4,
 *          price : {[Op.gte]} : 4000//Price is greater than or equal to 4000
 *      }
 * }
 */