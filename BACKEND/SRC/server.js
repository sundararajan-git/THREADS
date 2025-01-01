import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8080;
const app = express();

app.listen(PORT, (req, res) => {
  console.log("Server is Runing on", PORT);
});
