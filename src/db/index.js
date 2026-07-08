import mongoose from "mongoose";
import {DB_Name} from "../constants.js";
 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGO_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB host : $
            {connectionInstance.connection.host}`);
   } catch (error) {
        console.error(" MongoDB connection error ", error);
        process.exit(1); // Exit the process with an error code
    }
}
export default connectDB;