import express from "express";
import colors from "colors";
import env from './config/env.js'
import connectDb from "./config/db.js";
const PORT = process.env.PORT
connectDb();
const app = express();

app.listen(5000, () => {
  console.log("App running successfully", PORT)
})