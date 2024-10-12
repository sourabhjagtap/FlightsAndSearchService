const express = require("express");
const bodyParser = require("body-parser");
//fetch the port value from the provided location 
const {PORT} = require('./config/serverconfig');

const cityRepository = require('./repository/city-repository');
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async() => {
    //create express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}` )
        const repo = new CityRepository();//object creation
        repo.createCity({name : "New Delhi"});//creating new city 
    });
}

setupAndStartServer();