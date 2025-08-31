import express from "express";
import {
  getUserData,
  LoginUser,
  registerUser,
} from "../controllers/UserController.js";
import { protect } from "../middleware/Auth.js";

// like router.js

const userRouter = express.Router();

// api for Signup or Register
userRouter.post("/register", registerUser); //just like rh.functionname

// api for Login
userRouter.post("/login", LoginUser);
userRouter.get("/data", protect, getUserData);

export default userRouter;
