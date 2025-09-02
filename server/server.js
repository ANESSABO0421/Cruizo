import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./Routes/UserRoutes.js";
import ownerRoute from "./Routes/OwnerRoute.js";

// initialising the app

const app = express();

// Connect Database
await connectDB();

// middleware
app.use(cors()); //CONNECT FRONTEND AND BACKEND
app.use(express.json()); //IN THE FORM OF JSON

app.get("/", (req, res) => res.send("hello the server is running"));
// for user api
app.use("/api/user", userRouter);
// api for owner
app.use("/api/owner", ownerRoute);

const port = process.env.PORT || 3000;

// SERVER CREATING
app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
