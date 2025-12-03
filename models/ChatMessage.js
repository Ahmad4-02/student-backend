import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ["student", "admin"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("ChatMessage", chatMessageSchema);
