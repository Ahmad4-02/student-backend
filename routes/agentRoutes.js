import express from "express";
import Agent from "../models/Agent.js";

const router = express.Router();

// ✅ جلب جميع الوكلاء
router.get("/", async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ message: "خطأ في جلب الوكلاء" });
  }
});

// ✅ إضافة وكيل جديد
router.post("/", async (req, res) => {
  try {
    const agent = new Agent(req.body);
    await agent.save();
    res.json(agent);
  } catch (err) {
    res.status(400).json({ message: "فشل في الإضافة" });
  }
});

export default router;
