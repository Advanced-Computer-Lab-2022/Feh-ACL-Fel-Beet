require("dotenv").config({path: "./config.env"});
const port = process.env.PORT;

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

const adminRoutes = require('./routes/admin');

app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));
app.use('/', adminRoutes);

//get driver connection
const dbo = require("./db/conn");


app.listen(port, () => {
    //perform a databse connection when the server starts
    dbo.connectToServer();
    console.log(`Server is running on port: ${port}`);
});