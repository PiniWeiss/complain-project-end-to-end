import express from "express";

const router = express.Router();

router.post("/admin/login", (req,res)=> {
    res.send("This is auth endpoint")
});

export default router;