import express from "express";
import "dotenv/config";
import cors from "cors";

// initialising the app

const app = express();

// middleware
app.use(cors()); //CONNECT FRONTEND AND BACKEND
app.use(express.json()); //IN THE FORM OF JSON

app.get("/", (req, res) => res.send("hello the server is running"));

const port = process.env.PORT || 3000;

// SERVER CREATING
app.listen(port, () => console.log(`server is running on ${port}`));
