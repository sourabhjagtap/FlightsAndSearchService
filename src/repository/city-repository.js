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
    // async deleteCity({ cityId }){
    //     try{
    //         await City.destroy({
    //             where : {//where clause
    //                 id : cityId
    //             }
    //         });
    //         return true;
    //     }catch(error){
    //         console.log("Something went wrong in the repository layer ");
    //         throw {error};
    //     }
    // }



    async deleteCity(cityId) {
        try {
            if (!cityId || isNaN(cityId)) {
                throw new Error('Invalid city ID provided');
            }
    
            const result = await City.destroy({
                where: {
                    id: cityId
                }
            });
    
            // Return true if a row was deleted, false otherwise
            return result > 0;
        } catch (error) {
            console.log("Something went wrong in the repository layer:", error);
            throw error;
        }
    }


    

    // async updateCity(cityId , data) {// data => {name : "Kolhapur"}
    //     try{
    //         const city = await City.update(data , {
    //             where : {
    //                 id : cityId
    //             }
    //         });
    //         return city;
    //     }catch(error){
    //         console.log("Something went wrong in the repository layer ");
    //         throw {error};
    //     }
    // }

    // async getCity(cityId){
    //     try{
    //         const city = await City.findByPk(cityId);//find by primary key
    //         return city;
    //     }catch(error){
    //         console.log("Something went wrong in the repository layer ");
    //         throw {error};
    //     }
    //}


    async getCity(cityId) {
        try {
            const city = await City.findOne({
                where: { id: cityId }
            });
            return city;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            // const response = await City.update(data, {
            //     where: { id: cityId },
            //     returning: true
            // });

            // const [rowsUpdated, updatedCities] = response;

            // if (rowsUpdated === 0) {
            //     return null;
            // }

            // return updatedCities[0];

            //for getting updated data in my sql we use below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw error;
        }
    }


}

module.exports = CityRepository;