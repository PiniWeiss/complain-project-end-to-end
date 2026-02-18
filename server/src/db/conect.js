import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("connected", () => {
  console.log("mongoDB connecded!");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnecded!");
});
