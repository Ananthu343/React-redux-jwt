import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const url = process.env.DB_URL
console.log(url);
const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(`${url}`);
        console.log("Mongo connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;