const express = require("express");
const app = express();

app.use(express.json());

//import modules routes
const product = require("./routes/productRoute");

app.use("/api",product);




module.exports =app;