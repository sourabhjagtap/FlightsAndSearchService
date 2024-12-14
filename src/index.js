const express = require("express");
const bodyParser = require("body-parser");
//fetch the port value from the provided location 
const { PORT }  = require('./config/serverConfig');

//get access to the routes object from ./routes/index.js
const ApiRoutes = require('./routes/index')

//const cityRepository = require('./repository/city-repository');
//const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async() => {
    //create express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //so in any api request if we found /api then map it to ApiRoutes
    app.use('/api',ApiRoutes);//ApiRoutes is the index file inside the routes folder

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}` )
        //const repo = new CityRepository();//object creation
        //repo.createCity({name : "New Delhi"});//creating new city 
    });
}

setupAndStartServer(); 