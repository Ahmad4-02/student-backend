import applicationRoutes from "./routes/applicationRoutes.js";
const express = require("express");
const cors = require("cors");
app.use("/api/applications", applicationRoutes);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ تسجيل دخول تجريبي
app.post("/api/student/login", (req, res) => {
  const { email, password } = req.body;

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

// ✅ الطلبات
app.get("/api/applications", (req, res) => {
  res.json([
    { id: 1, program: "هندسة برمجيات", status: "قيد المراجعة" },
    { id: 2, program: "إدارة أعمال", status: "مقبول" },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
