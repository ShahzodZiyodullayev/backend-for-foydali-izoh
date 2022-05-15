const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const JSONData = require("./data.json");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.DATABASE_LOCAL, () =>
  console.log("DB connection succesfully"),
);

// app.use("/", require)

app.get("/ok", (req, res) => {
  res.send(JSONData);
});

app.post("/hi", (req, res) => {
  console.log(req.body);
  res.send("hii");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port} port...`);
});
