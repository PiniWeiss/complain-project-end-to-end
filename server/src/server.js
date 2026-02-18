import express from "express";
import dotenv from "dotenv";
import complaintsRouter from "./routes/complaints.js";
import authRouter from "./routes/auth.js";
import { connect } from "./db/conect.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api", complaintsRouter);
app.use("/api", authRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("Running on port 8000...");
});
