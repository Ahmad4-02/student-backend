const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ تسجيل دخول طالب (تجريبي)
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

app.get("/api/applications", (req, res) => {
  res.json([
    { id: 1, program: "هندسة برمجيات", status: "قيد المراجعة" },
    { id: 2, program: "إدارة أعمال", status: "مقبول" },
  ]);
});

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});



app.listen(5000, () => console.log("Server running ✅"));
