//call to repository layer
const { cityRepository } = require('../repository/index');

class CityServices {
    constructor() {
        this.cityRepository = new cityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    // async deleteCity(cityId) {
    //     try {
    //         const response = await this.cityRepository.deleteCity(cityId);
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong at service layer");
    //         throw error;
    //     }
    // }


    async deleteCity(cityId) {
        try {
            if (!cityId || isNaN(cityId)) {
                throw new Error("Invalid city ID");
            }
    
            const response = await this.cityRepository.deleteCity(cityId);
            if (!response) {
                throw new Error(`City with ID ${cityId} does not exist`);
            }
    
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    

    // async updateCity(cityId, data) {
    //     try {
    //         const city = await this.cityRepository.updateCity(cityId, data);
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong at service layer");
    //         throw error;
    //     }
    // }

    // async getCity(cityId) {
    //     try {
    //         const city = await this.cityRepository.getCity(cityId);
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong at service layer");
    //         throw error;
    //     }
    // }


    async getCity(cityId) {
        try {
            
            if (!cityId || isNaN(cityId)) {
                throw new Error("Invalid city ID");
            }

            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {

            if (!cityId || isNaN(cityId)) {
                throw new Error("Invalid city ID");
            }

            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }

    async getAllCities(filter){
        try{
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        }catch (error) {
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }

}




module.exports = CityServices;
