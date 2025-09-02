import express from "express";
import { protect } from "../middleware/Auth.js";
import { addCar, changeRoleToOwner } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRoute = express.Router();

// api for changing the owner
ownerRoute.post("/change-role", protect, changeRoleToOwner);
// api to upload a file and add the car
ownerRoute.post("/add-car", upload.single("image"), protect, addCar);

export default ownerRoute;
