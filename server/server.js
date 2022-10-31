require("dotenv").config({path: "./config.env"});

const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");

//get driver connection
const dbo = require("./db/conn");
const mongoose = require('mongoose')


//express app
const app = express();
app.use(cors({origin:"*"}))

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  }
)
  
//routes
const basicRoutes = require("./routes/record");
const adminRoutes = require("./routes/admin");
const instructorRoutes = require('./routes/instructor');
app.use(basicRoutes);
app.use(adminRoutes);
app.use(instructorRoutes);


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