import express from "express";
import { LoginUser, registerUser } from "../controllers/UserController";

// like router.js

const userRouter = express.Router();

// api for Signup or Register
userRouter.post("/register", registerUser); //just like rh.functionname

// api for Login
userRouter.post("/login", LoginUser);

export default userRouter;
