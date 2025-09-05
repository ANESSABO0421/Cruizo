import express from "express";
import { protect } from "../middleware/Auth.js";
import {
  addCar,
  changeRoleToOwner,
  getOwnerCars,
  ownerDeleteCar,
  toggleCarAvailability,
} from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRoute = express.Router();
// protect is middleware
// api for changing the owner
ownerRoute.post("/change-role", protect, changeRoleToOwner);
// api to upload a file and add the car
ownerRoute.post("/add-car", upload.single("image"), protect, addCar);
// api to get owner cars
ownerRoute.get("/cars", protect, getOwnerCars);
// api to ggle car
ownerRoute.post("/toggle-car", protect, toggleCarAvailability);
// api to delete car
ownerRoute.post("/delete-car", protect, ownerDeleteCar);

export default ownerRoute;
