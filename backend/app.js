const express = require("express");
const cors = require('cors');
const app = express();
const errormiddlewarre = require("./middleware/error")
const cookieParser = require("cookie-parser")
app.use(express.json());
app.use(cookieParser());
app.use(cors());
//import modules routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api",product);
app.use("/api",user);

//middleware
app.use(errormiddlewarre);


module.exports =app;