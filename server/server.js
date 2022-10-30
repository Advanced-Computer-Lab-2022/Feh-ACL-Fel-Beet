require("dotenv").config({path: "./config.env"});

const express = require("express");
const Routes = require('./routes/record')
const port = process.env.PORT || 5000;

//get driver connection
const dbo = require("./db/conn");
const mongoose = require('mongoose')


//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  


//routes
app.use(require("./routes/record"));


// connect to db
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(port, () => {
        //perform a databse connection when the server starts
        dbo.connectToServer();
        console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err)
  }) 


