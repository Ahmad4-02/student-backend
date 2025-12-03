import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ربط جميع المسارات تحت /api
app.use("/api", applicationRoutes);

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

// ✅ تشغيل السيرفر
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});
