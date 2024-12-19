//const AirplaneRepository = require('./airplane-repository');
//const FlightRepository = require('./flight-repository');

const CrudReopsitory = require('./crud-repository');

module.exports = {
    cityRepository : require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository'),
    AirportRepository: require('./airport-repository'),
    CrudReopsitory: require('./crud-repository')
}