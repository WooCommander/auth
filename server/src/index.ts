require("dotenv").config();
import express from "express";
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const UserController = require("./controllers/users-controller");

const PORT = process.env.PORT || 5000;
process.env;
const app = express();

import authRouter from "./router";
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", authRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
