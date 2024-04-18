const app = require("./app");
const dotenv = require("dotenv")
const mongooesConnect = require('./config/db');
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

//config
dotenv.config({path:"backend/config/config.env"});
//connect to  data base
mongooesConnect();
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://Localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });