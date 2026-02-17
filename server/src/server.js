import express from "express";
import dotenv from "dotenv";
import mogoose from "mongoose";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js"
import complaintsRouter from './routes/complaints.js'

const app = express();
dotenv.config();

const  connect = async ()=> {try {
  await mongoose.connect(process.env.MONGO);
  
} catch (error) {
  throw error
}}

mogoose.connection.on("connected", ()=> {
    console.log("mongoDB connecded!");
})
mogoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnecded!");
})

app.use(express.json())

app.use("/api", complaintsRouter)

app.listen(8000, () => {
    connect()
  console.log("Running on port 8000...");
});
