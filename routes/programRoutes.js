import express from "express";
import Program from "../models/Program.js";

const router = express.Router();

// ✅ جلب جميع البرامج
router.get("/", async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: "خطأ في جلب البرامج" });
  }
});

// ✅ إضافة برنامج جديد
router.post("/", async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();
    res.status(201).json(program);
  } catch (err) {
    res.status(400).json({ message: "فشل إنشاء البرنامج" });
  }
});

export default router;
