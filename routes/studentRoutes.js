import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
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

router.get("/profile", (req, res) => {
  res.json({
    firstName: "Ahmed",
    lastName: "Mohamad",
    email: "test@test.com",
    phone: "09999999",
    country: "Syria",
  });
});

export default router;
