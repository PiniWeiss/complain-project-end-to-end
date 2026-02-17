import express from "express";
import Complain from "../models/complaints.js";

const router = express.Router();

router.post("/complaints", async (req, res) => {
  const newComplain = new Complain(req.body);
  try {
    const saveComplain = await newComplain.save();
    res.status(200).json(saveComplain);
  } catch (err) {
    console.log(err);
  }
});
router.get('/', (req, res) => res.send("working") )

export default router;
