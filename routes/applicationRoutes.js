import express from "express";
import Application from "../models/Application.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// ✅ جلب طلبات الطالب
router.get("/", auth, async (req, res) => {
  try {
    const apps = await Application.find({ student: req.user.id });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "خطأ بالسيرفر" });
  }
});

// ✅ إضافة طلب جديد
router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    const newApp = new Application({
      student: req.user.id,
      title,
    });

    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(500).json({ message: "فشل إضافة الطلب" });
  }
});

export default router;
