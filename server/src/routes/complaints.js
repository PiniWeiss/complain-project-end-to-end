import express from "express";
import {
  createComplaint,
  getAllComplaints,
} from "../controllers/complaints.js";
import { requireAdminAuth } from "../middlewares/requireAdminAuth.js";

const router = express.Router();

router.post("/complaints", createComplaint);
router.get("/complaints",requireAdminAuth, getAllComplaints);

export default router;
