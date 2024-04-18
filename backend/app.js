const express = require("express");
const app = express();
const errormiddlewarre = require("./middleware/error")
app.use(express.json());

//import modules routes
const product = require("./routes/productRoute");

app.use("/api",product);


//middleware
app.use(errormiddlewarre);


module.exports =app;