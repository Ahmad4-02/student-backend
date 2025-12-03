import express from "express";
import Application from "../models/Application.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// ✅ Middleware للتحقق من الطالب
const authStudent = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "غير مصرح" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.studentId = decoded.id;
  next();
};

// ✅ إضافة طلب جديد
router.post("/", authStudent, async (req, res) => {
  const { title } = req.body;

  const app = await Application.create({
    title,
    student: req.studentId,
  });

  res.json(app);
});

// ✅ جلب طلبات الطالب
router.get("/", authStudent, async (req, res) => {
  const apps = await Application.find({ student: req.studentId });
  res.json(apps);
});

export default router;
