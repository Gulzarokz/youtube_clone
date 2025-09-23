import express from "express";
import dotenv from "dotenv"
import { mongoDB } from "./db/mongodb.js";
const app = express()

dotenv.config();
mongoDB();

const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})


