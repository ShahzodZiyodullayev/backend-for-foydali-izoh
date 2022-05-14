const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const JSONData = require("./data.json");

app.use(cors());
dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.DATABASE_LOCAL, () =>
  console.log("DB connection succesfully"),
);

// app.use("/", require)

app.get("/ok", (req, res) => {
  res.send(JSONData);
});

const port = process.env.PORT || 5000;

app.listen(2000, () => {
  console.log(`Server is running on ${port} port...`);
});
