import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ المسار الصحيح
app.use("/api/student/applications", applicationRoutes);

// ✅ الاتصال بقاعدة البيانات (اختياري حاليًا)
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log("DB Skipped ⚠️"));

// ✅ اختبار السيرفر
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ تشغيل السيرفر
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});
