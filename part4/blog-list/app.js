const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const blogController = require("./controllers/blog");
const { MONGODB_URL} = require("./utils/config");

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery',false)
mongoose.connect(MONGODB_URL)
    .then(result => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error.message);
    });

app.use("/api/blog", blogController);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;