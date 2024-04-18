const mongooes = require("mongoose");
// const dotenv =require("dotenv");
// dotenv.config({path:"backend/config/config.env"})

const mongooesConnect=()=>{

    mongooes.connect(process.env.DB_URL).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
}
module.exports = mongooesConnect;