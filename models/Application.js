import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "قيد المراجعة",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Application", applicationSchema);
