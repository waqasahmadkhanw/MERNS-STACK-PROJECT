import app from "./app.js";
import dbConnection from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
dbConnection()
.then(()=>{
app.listen((process.env.PORT||6000),()=>{
    console.log(`"Mongodb server is listening on Port:",${process.env.PORT}`)
})
})
.catch((error)=>{
console.log("MogoDb server connection failed!",error)
process.exit(1)
})