const express = require("express");
const bodyParser = require("body-parser");
//fetch the port value from the provided location 
const {PORT} = require('./config/serverconfig');
const setupAndStartServer = async() => {
    //create express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}` )
    });
}

setupAndStartServer();