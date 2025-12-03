import express from "express";
const router = express.Router();

// ✅ جلب بيانات الطالب
router.get("/student/profile", (req, res) => {
  res.json({
    firstName: "Ahmed",
    lastName: "Mohamad",
    email: "test@test.com",
    phone: "09999999",
    country: "Syria",
  });
});

// ✅ طلبات الطالب
router.get("/student/applications", (req, res) => {
  res.json([
    { id: 1, university: "Istanbul University", status: "Pending" },
    { id: 2, university: "Ankara University", status: "Accepted" },
  ]);
});

export default router;
