const express = require("express");
const app = express();
require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(require("./routes/record"));
//get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    //perform a databse connection when the server starts
    dbo.connectToServer();
    console.log(`Server is running on port: ${port}`);
});