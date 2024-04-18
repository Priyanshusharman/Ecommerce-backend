const express = require("express");
const app = express();
const errormiddlewarre = require("./middleware/error")
app.use(express.json());

//import modules routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api",product);
app.use("/api",user);

//middleware
app.use(errormiddlewarre);


module.exports =app;