// requesthandler.js

import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// token genration
const generateToken = (userId) => {
  const payload = userId;
  return jwt.sign(payload, process.env.JWT_SECRET); //token consits of userId,the token and expiresIn
};

// Signup Register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation
    if (!name || !email || !password || password.length < 8) {
      //   return res.status(400).send("fill all the fields");
      return res.json({ success: false, message: "fill all the field" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({
        success: "false",
        message: "the email is already existed",
      });
    }

    // hashpassword
    const hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashpassword });
    // token pass with the userId
    const token = generateToken(user._id.toString());
    res.json({ success: true, token }); //success treu and also give the token
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Login
export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "user not found" });
    }
    // password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({ success: false, message: "invalid credentials" });
    }
    // token genrate
    const token = generateToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
