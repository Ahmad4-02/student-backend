import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import applicationRoutes from "./routes/applicationRoutes.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/student/applications", applicationRoutes);



// ✅ الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log(err));

// ✅ مسار اختبار
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ================================
// ✅ مسارات الطالب (Students API)
// ================================

// 🔐 تسجيل دخول الطالب
app.post("/api/student/login", async (req, res) => {
  const { email, password } = req.body;

  // مؤقتاً بدون قاعدة بيانات
  if (email === "test@test.com" && password === "123456") {
    res.json({
      token: "real_token_123",
      student: {
        firstName: "Ahmed",
        lastName: "Mohamad",
        email,
        phone: "09999999",
        country: "Syria",
      },
    });
  } else {
    res.status(401).json({ message: "بيانات غير صحيحة" });
  }
});

// ✅ جلب بيانات الطالب
app.get("/api/student/profile", (req, res) => {
  res.json({
    firstName: "Ahmed",
    lastName: "Mohamad",
    email: "test@test.com",
    phone: "09999999",
    country: "Syria",
  });
});

// ✅ طلبات الطالب
app.get("/api/student/applications", (req, res) => {
  res.json([
    { id: 1, university: "Istanbul University", status: "Pending" },
    { id: 2, university: "Ankara University", status: "Accepted" },
  ]);
});

// ✅ تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});
