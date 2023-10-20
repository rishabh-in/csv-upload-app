import express from "express";
import env from './config/env.js'

const PORT = process.env.PORT
const app = express();

app.listen(5000, () => {
  console.log("App running successfully", PORT)
})