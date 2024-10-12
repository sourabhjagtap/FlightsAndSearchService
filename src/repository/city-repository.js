const {City} = require('../models/index')

class CityRepository{
    //Create a city
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            throw {error};
        }
    }

    //delete a city
    async deleteCity({ cityId }){
        try{
            await City.destroy({
                where : {//where clause
                    id : cityId
                }
            })
        }catch(error){
            throw {error};
        }
    }
}

module.exports = CityRepository;