import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // giving a message that mongodb connected
    mongoose.connection.on("connected", () =>
      console.log("MongoDB Connected!!!")
    );
    // database creation
    await mongoose.connect(`${process.env.MONGODB_URI}/Cruizo`); //just like pasting the url and our db name AFTER "/"
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
