import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true, // بكالوريوس - ماجستير
  },
  duration: {
    type: String,
    required: true, // 4 سنوات مثلاً
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Program", programSchema);
