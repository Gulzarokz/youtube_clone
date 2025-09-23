import mongoose from "mongoose";

export const mongoDB = async ()=>{
    try {
       const connection =  await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}