import mongoose from "mongoose";

export default function connectDB (){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("Mongo DB connected...")
        });
        connection.on("error",(error)=>{
            console.log("Mongo DB connection Error",error);
            process.exit()
        })
    } catch (error) {
        console.log(`MONGO-DB ERROR : ${error}`)
    }
}