import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import dotenv from "dotenv";

dotenv.config();

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({ success: false, message: "not Authorized" });
  }
  try {
    // THIS WILL DECODE THE TOKEN AND PASS TO THE USERID
    const userId = jwt.decode(token, process.env.JWT_SECRET);
    if (!userId) {
      return res.json({ success: false, message: "not authorized" });
    }
    // if got userId macth this on our user collection
    // req.user only req on the userController.js alll other managed by middleware
    req.user = await User.findById(userId).select("-password"); //"-password means remove password"
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
