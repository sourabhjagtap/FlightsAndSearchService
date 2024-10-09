const express = require("express");
//fetch the port value from the provided location
const {PORT} = require('./config/serverconfig');
const setupAndStartServer = async() => {
    //create express object
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}` )
    });
}

setupAndStartServer();