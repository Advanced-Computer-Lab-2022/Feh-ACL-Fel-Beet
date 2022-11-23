require("dotenv").config({path: "./config.env"});
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose')

//MIDDLEWARE
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  }
)
  
//ROUTES
const courseRoutes = require("./Routes/courseRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const instructorRoutes = require('./Routes/instructorRoutes');
const corporateTraineeRoutes = require('./Routes/corporateTraineeRoutes')
const guestRoutes = require('./Routes/guestRoutes')
app.use(courseRoutes);
app.use(adminRoutes);
app.use(instructorRoutes);
app.use(corporateTraineeRoutes);
app.use(guestRoutes);

//DB CONNECTION & LISTENING TO PORT
mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    console.log("Connected to MongoDB.")
    app.listen(port , () => {
        console.log("Listening on port", port)
    })
})
.catch((error) => {
    console.log(error)
})