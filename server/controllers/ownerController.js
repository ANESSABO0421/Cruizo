import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import User from "../models/Users.js";
import fs from "fs";

// api to change the user
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findById(_id, { role: "owner" });
    res.json({ success: true, message: "Now you can list cars" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to list car
export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    // upload the file to imagekit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    // For optimized URL Generation, works for both images and videos
    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" },
        { quality: "auto" }, //automatically compress
        { format: "webp" }, //convert to modern format
      ],
    });

    const image = optimizedImageUrl;
    // adding this image to database
    await Car.create({ ...car, owner: _id, image });
    res.json({ success: true, message: "Car Added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to list owner cars
export const getOwnerCars = async (req, res) => {
  try {
    // id of whoever logged in based on the middleware
    const { _id } = req.user;
    // based on the owner id on car finding cars
    const cars = await Car.find({ owner: _id });
    res.json({ success: true, cars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// for changing car available  or not
export const toggleCarAvailability = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    // check the car belong to user
    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorised" });
    }
    // update only the matchIds car and update only availabilityy
    car.isAvailable = !car.isAvailable;
    await car.save();

    res.json({
      success: true,
      message: "successfullt update the availability",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// abiliy to delete the owner car by the owner
export const ownerDeleteCar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { carId } = req.body;
    const car = await Car.findById(carId);

    // check the car belong to user
    if (car.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "unAuthorised" });
    }
    car.owner = null;
    car.isAvailable = false;

    await car.save();

    res.json({ success: true, message: "Car Removed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Api to get dashboard data
export const getDashboardData = async (req, res) => {
  try {
    const { _id, role } = req.user;

    // not owner
    if (role !== "owner") {
      return res.json({ success: false, message: "Unauthorised" });
    }

    const cars = await Car.find({ owner: _id });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
