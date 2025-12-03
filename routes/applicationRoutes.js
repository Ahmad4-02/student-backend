import express from "express";
const router = express.Router();

// ✅ جلب طلبات الطالب
router.get("/", async (req, res) => {
  res.json([
    { id: 1, university: "Istanbul University", status: "Pending" },
    { id: 2, university: "Ankara University", status: "Accepted" },
  ]);
});

export default router;
