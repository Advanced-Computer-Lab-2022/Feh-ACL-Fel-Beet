require("dotenv").config({ path: "./config.env" });

const bodyParser = require("body-parser");
const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//MIDDLEWARE
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
const courseRoutes = require("./Routes/courseRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const instructorRoutes = require("./Routes/instructorRoutes");
const corporateTraineeRoutes = require("./Routes/corporateTraineeRoutes");
const individualTraineeRoutes = require("./Routes/individualTraineeRoutes");
const guestRoutes = require("./Routes/guestRoutes");
app.use("/course", courseRoutes);
app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);
app.use("/corporateTrainee", corporateTraineeRoutes);
app.use("/individualTrainee", individualTraineeRoutes);
app.use("/guest", guestRoutes);

//DB CONNECTION & LISTENING TO PORT
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("Connected to MongoDB.");
    app.listen(port, () => {
      console.log("Listening on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
