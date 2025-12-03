import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  country: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Agent", agentSchema);
