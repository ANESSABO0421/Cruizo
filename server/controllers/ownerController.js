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
        { format: "webp" }//convert to modern format
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
