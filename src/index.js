const express = require("express");
const bodyParser = require("body-parser");
//fetch the port value from the provided location 
const { PORT }  = require('./config/serverConfig');

//get access to the routes object from ./routes/index.js
const ApiRoutes = require('./routes/index')

const db = require('./models/index');
//const sequelize = require('sequelize');
const {City, Airport} = require('./models/index');
const {Airplane} = require('./models/index');
const { where } = require("sequelize");


const setupAndStartServer = async() => {
    //create express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //so in any api request if we found /api then map it to ApiRoutes
    app.use('/api',ApiRoutes);//ApiRoutes is the index file inside the routes folder

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}` )
        if(process.env.SYNC_DB){//do sync one time 
            db.sequelize.sync({alter : true});
        }
        //db.sequelize.sync({alter : true});//sync once only hence comment
        //=============================================
        // const city = await City.findOne({//find city with id = 52
        //     where:{
        //         id:52
        //     }
        // }); 
        // const airports = await city.getAirports();//find all the airports in city with id = 52 by its name (it will perform join operation)
        // console.log(city, airports);
        //==========================================
        // console.log(city);
        
        //inserting data into airplane table directly
        // await Airplane.create({
        //     modelNumber : 'Bombardier CRJ'
        // });

    });
}

setupAndStartServer(); 