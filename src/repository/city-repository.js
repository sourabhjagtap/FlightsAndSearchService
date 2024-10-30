const {City} = require('../models/index')

class CityRepository{
    //Create a city
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer ");
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
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }

    async updateCity(cityId , data) {// data => {name : "Kolhapur"}
        try{
            const city = await City.update(data , {
                where : {
                    id : cityId
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);//find by primary key
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer ");
            throw {error};
        }
    }
}

module.exports = CityRepository;