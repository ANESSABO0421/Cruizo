// for authentication
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // consist either owner or user
    role: { type: String, enum: ["owner", "user"], default: "user" },
    Image: { type: String, default: "" },
  },
  { timestamps: true } //for knowing when created
);

// collection created
const User = mongoose.model("User", userSchema);

export default User;
