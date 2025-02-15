import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {

    try{
        mongoose.connection.on("connected", () => {
            console.log("DB connected");
        });
        await mongoose.connect(`${process.env.MONGO_URI}/question-paper-generator`);
      

    }catch(err){
        console.log(err);
    }
  

};

export default connectDB;