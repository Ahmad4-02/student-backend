import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentRoutes from "./routes/studentRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ربط المسارات
app.use("/api/student", studentRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/chat", chatRoutes);

// ✅ اختبار السيرفر
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log(err));

// ✅ تشغيل السيرفر
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});
